import React, { useState } from "react";
import { Input, Button, VStack, HStack, Text, Box } from "@chakra-ui/react";

function ColorSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm) return;
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.color.pizza/v1/names/?name=${encodeURIComponent(searchTerm)}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.colors);
      } else {
        setSearchResults([]);
        console.error("Search failed:", response.status);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
    setIsLoading(false);
  };

  return (
    <VStack spacing={4}>
      <HStack>
        <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter a color name" />
        <Button onClick={handleSearch} isLoading={isLoading}>
          Search
        </Button>
      </HStack>
      {searchResults.length > 0 && (
        <VStack>
          {searchResults.map((color) => (
            <Box key={color.hex} bg={color.hex} p={4} m={2} borderRadius="md" boxShadow="md">
              <Text color={color.luminanceWCAG < 0.5 ? 'white' : 'black'}>{color.name}</Text>
            </Box>
          ))}
        </VStack>
      )}
    </VStack>
  );
}

export default ColorSearch;

import React from "react";
import { Box, Heading, SimpleGrid, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";

const colors = [
  { name: "Red", value: "red.500" },
  { name: "Orange", value: "orange.500" },
  { name: "Yellow", value: "yellow.500" },
  { name: "Green", value: "green.500" },
  { name: "Teal", value: "teal.500" },
  { name: "Blue", value: "blue.500" },
  { name: "Cyan", value: "cyan.500" },
  { name: "Purple", value: "purple.500" },
  { name: "Pink", value: "pink.500" },
];

const Index = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Nice-Looking Colors
        </Heading>
        <Text fontSize="xl" textAlign="center">
          A collection of visually appealing colors using Chakra UI.
        </Text>
        <Wrap spacing={8} justify="center">
          {colors.map((color) => (
            <WrapItem key={color.name}>
              <Box bg={color.value} borderRadius="lg" boxShadow="md" p={8} textAlign="center" color="white">
                <Heading as="h2" size="xl" mb={2}>
                  {color.name}
                </Heading>
                <Text fontSize="lg">{color.value}</Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Box>
  );
};

export default Index;

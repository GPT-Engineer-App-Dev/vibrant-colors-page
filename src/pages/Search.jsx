import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import ColorSearch from "../components/ColorSearch";
import CreateProjectButton from "../components/CreateProjectButton";

function Search() {
  return (
    <VStack spacing={8}>
      <ColorSearch />
      <CreateProjectButton />
    </VStack>
  );
}

export default Search;

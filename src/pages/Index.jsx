import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <ChakraLink as={Link} to="/search" color="teal.500">
      Search for a color by name
    </ChakraLink>
  );
}

export default Index;

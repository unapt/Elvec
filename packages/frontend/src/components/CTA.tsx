import { Link as ChakraLink, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";

import { Container } from "./Container";

function randomButton() {
  alert("hey :)");
}

function testBackend() {
  fetch("api/")
    .then((response) => response.json())
    .then((data) => alert("coming from backend: " + data.message));
}

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom={0}
    width="full"
    maxWidth="3xl"
    py={3}
  >
    <Button
      onClick={randomButton}
      variant="outline"
      colorScheme="green"
      rounded="button"
      flexGrow={1}
      mx={2}
      width="full"
    >
      random test button
    </Button>
    <Button
      onClick={testBackend}
      variant="solid"
      colorScheme="green"
      rounded="button"
      flexGrow={3}
      mx={2}
      width="full"
    >
      Test Python back-end
    </Button>
  </Container>
);

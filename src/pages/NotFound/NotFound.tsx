import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();

  return (
    <Box w="100%" minH="calc(100vh - 160px)" color="gray.700">
      <Container
        pt="4"
        pb="12"
        h="100%"
        d="flex"
        maxW="container.xl"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text fontSize="3xl" fontWeight="600">
          404 Page not found
        </Text>
        <Text
          cursor="pointer"
          color="blue.500"
          onClick={() => {
            history.push("/");
          }}
        >
          Go home
        </Text>
      </Container>
    </Box>
  );
};

export default NotFound;

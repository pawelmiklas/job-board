import {
  Box,
  Container,
  Flex,
  Spacer,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "assets/logo.png";

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <>
      <Box w="100%" p={4} color="gray.700">
        <Container maxW="container.xl">
          <Flex>
            <Box p="4" d="flex" alignItems="center">
              <Image src={logo} alt="logo" htmlWidth="200" />
            </Box>
            <Spacer />
            <Box p="4">
              <Button variant="ghost" mr="2">
                Sign in
              </Button>
              <Button variant="ghost">Sign up</Button>
            </Box>
          </Flex>
        </Container>
      </Box>
      {children}
      <Box w="100%" p={4} color="gray.300" bg="gray.700">
        <Container maxW="container.xl">
          <Flex justifyContent="center">
            <Text fontSize="md">Made by Paweł Mikłas</Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default LayoutWrapper;

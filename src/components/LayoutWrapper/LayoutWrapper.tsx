import {
  Box,
  Container,
  Flex,
  Spacer,
  Image,
  Button,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import logo from "assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "App";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  const [user] = useAuthState(auth);
  const history = useHistory();

  return (
    <>
      <Box w="100%" p={4} color="gray.700">
        <Container maxW="container.xl">
          <Flex>
            <Box p="4" d="flex" alignItems="center">
              <Link to="/">
                <Image src={logo} alt="logo" htmlWidth="200" />
              </Link>
            </Box>
            <Spacer />
            {user ? (
              <Box p="4" d="flex" alignItems="center">
                <Link to="/dashboard/offers/add">
                  <Button variant="ghost" mr="2">
                    Post a job!
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="ghost" mr="2">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  mr="2"
                  onClick={() => {
                    auth.signOut();
                    history.push("/");
                  }}
                >
                  Logout
                </Button>
                <Avatar src="https://bit.ly/dan-abramov" />
              </Box>
            ) : (
              <Box p="4">
                <Link to="/login">
                  <Button variant="ghost" mr="2">
                    Sign in
                  </Button>
                </Link>
                <Link to="/registration">
                  <Button variant="ghost">Sign up</Button>
                </Link>
              </Box>
            )}
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

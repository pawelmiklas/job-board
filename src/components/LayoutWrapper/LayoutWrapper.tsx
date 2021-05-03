import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { auth } from "App";
import logo from "assets/logo.png";
import useLocalStorage from "hooks/useLocalStorage";
import React from "react";
import { Link, useHistory } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage<string | undefined>(
    "userId",
    undefined
  );
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
                    setUser(undefined);
                    history.push("/");
                  }}
                >
                  Logout
                </Button>
                <Avatar src={`https://picsum.photos/seed/${user}/200`} />
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

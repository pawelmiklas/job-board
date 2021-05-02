import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

type AuthDashboardWrapperProps = {
  children: React.ReactNode;
};

const AuthDashboardWrapper = ({ children }: AuthDashboardWrapperProps) => (
  <Box w="100%" minHeight="calc(100vh - 160px)" color="gray.700" minH="600px">
    <Container pt="4" pb="12" h="100%" maxW="container.xl">
      <Grid templateColumns="repeat(9, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Flex
            p="4"
            flexDirection="column"
            border="1px"
            borderColor="gray.300"
            position="sticky"
            top="5"
          >
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Link to="/">
                <Box h="20px" cursor="pointer">
                  Home
                </Box>
              </Link>
              <Link to="/dashboard">
                <Box h="20px" cursor="pointer">
                  Dashboard
                </Box>
              </Link>
              <Link to="/dashboard/offers">
                <Box h="20px" cursor="pointer">
                  Offers
                </Box>
              </Link>
            </VStack>
          </Flex>
        </GridItem>
        <GridItem colSpan={7}>{children}</GridItem>
      </Grid>
    </Container>
  </Box>
);

export default AuthDashboardWrapper;

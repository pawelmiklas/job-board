import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

type InfoSummaryType = {
  title: string;
  color: string;
  amount: string;
};

const InfoSummary: InfoSummaryType[] = [
  {
    title: "Active offers",
    color: "green",
    amount: "3",
  },
  {
    title: "Number of submissions",
    color: "blue",
    amount: "27",
  },
  {
    title: "Number of offer displays",
    color: "orange",
    amount: "1205",
  },
  {
    title: "Average time spent on an offer",
    color: "red",
    amount: "2,5 min",
  },
  {
    title: "Balance (to be paid)",
    color: "purple",
    amount: "480 zł",
  },
];

const Dashboard = () => {
  return (
    <Box w="100%" height="calc(100vh - 160px)" color="gray.700" minH="600px">
      <Container pt="4" pb="12" h="100%" maxW="container.xl">
        <Grid templateColumns="repeat(9, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <Flex
              p="4"
              flexDirection="column"
              border="1px"
              borderColor="gray.300"
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
          <GridItem colSpan={7}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {InfoSummary.map((item) => (
                <GridItem
                  key={item.title}
                  colSpan={1}
                  bgColor={`${item.color}.50`}
                  border="2px"
                  borderColor={`${item.color}.100`}
                  borderRadius="4px"
                  minH="120"
                >
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    h="100%"
                  >
                    <Text fontSize="2xl">
                      {item.title}: <b>{item.amount}</b>
                    </Text>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;

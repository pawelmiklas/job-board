import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import AuthDashboardWrapper from "components/AuthDashboardWrapper/AuthDashboardWrapper";
import React from "react";

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
    amount: "480$",
  },
];

const Dashboard = () => (
  <AuthDashboardWrapper>
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
          p="6"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <Text fontSize="2xl" textAlign="center">
              {item.title}: <b>{item.amount}</b>
            </Text>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  </AuthDashboardWrapper>
);

export default Dashboard;

import { Box, Container, Flex, Text, Button, Input } from "@chakra-ui/react";
import OfferCard from "components/OfferCard/OfferCard";
import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Home = (props: Props) => {
  return (
    <Box w="100%" minH="1000" color="gray.700">
      <Box
        d="flex"
        alignItems="center"
        flexDirection="column"
        bgGradient="linear(to-l, #6be1ff, #367bfa)"
        h="280"
        justifyContent="center"
        color="white"
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          37 Offers for mobile developers
        </Text>
        <Text fontSize="xl">Find your dream job!</Text>
      </Box>
      <Container pt="4" maxW="container.lg" position="relative">
        <Box
          p="4"
          d="flex"
          borderRadius="10"
          bgColor="white"
          boxShadow="xl"
          height="85"
          alignItems="center"
          position="absolute"
          top="-40px"
          left="15px"
          right="15px"
        >
          <Input placeholder="Search for job" />
          <Button variant="solid" ml="4" colorScheme="blue">
            Search
          </Button>
        </Box>
        <Flex flexDirection="column" mt="16">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </Flex>
        <Flex py="8" justifyContent="center">
          <Link to="/offers">
            <Text color="gray.500">View all job positions</Text>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;

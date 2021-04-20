import { Box, Container, Flex, Text, Button, Input } from "@chakra-ui/react";
import HomeCard from "components/HomeCard/HomeCard";
import React from "react";

interface Props {}

const Home = (props: Props) => {
  return (
    <Box w="100%" p={4} minH="1000" color="gray.700">
      <Container maxW="container.xl">
        <Box
          p="4"
          d="flex"
          alignItems="center"
          flexDirection="column"
          bgGradient="linear(to-l, #6be1ff, #367bfa)"
          h="280"
          borderRadius="10"
          justifyContent="center"
          color="white"
        >
          <Text fontSize="4xl" fontWeight="bold" textAlign="center">
            37 Offers for mobile developers
          </Text>
          <Text fontSize="xl">Find your dream job!</Text>
        </Box>
      </Container>
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
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </Flex>
        <Flex py="8" justifyContent="center">
          <Text color="gray.500">View all job positions</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;

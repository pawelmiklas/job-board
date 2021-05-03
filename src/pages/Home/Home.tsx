import React from "react";
import { Box, Container, Flex, Text, Button, Input } from "@chakra-ui/react";
import OfferCard from "components/OfferCard/OfferCard";
import useOffersCollection from "hooks/useOffersCollection";
import { Link } from "react-router-dom";

const Home = () => {
  const [offers] = useOffersCollection({});

  return (
    <Box w="100%" minH="calc(100vh - 160px)" color="gray.700">
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
          <Input label="Search for job" />
          <Link to="/offers">
            <Button variant="solid" ml="4" colorScheme="blue">
              Search
            </Button>
          </Link>
        </Box>
        <Flex flexDirection="column" mt="16">
          {offers?.length ? (
            <>
              {offers?.map((item) => (
                <OfferCard key={item.id} {...item} />
              ))}
              <Flex py="8" justifyContent="center">
                <Link to="/offers">
                  <Text color="gray.500">View all job positions</Text>
                </Link>
              </Flex>
            </>
          ) : (
            <Text textAlign="center">No active offers</Text>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;

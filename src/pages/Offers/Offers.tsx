import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  Input,
  Grid,
  GridItem,
  Checkbox,
  NumberInput,
  NumberInputField,
  Spacer,
  Select,
} from "@chakra-ui/react";
import OfferCard from "components/OfferCard/OfferCard";
import React from "react";

const seniority = ["Trainee", "Junior", "Mid", "Senior", "Expert"];

const employmentType = ["B2B", "Permanent", "Mandate contract"];

interface Props {}

const Offers = (props: Props) => {
  return (
    <Box w="100%" minH="1000" color="gray.700">
      <Box
        p="4"
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
        <Grid templateColumns="repeat(7, 1fr)" gap={4}>
          <GridItem colSpan={2} mt="16">
            <Flex flexDirection="column" position="sticky" top="0">
              <Text fontSize="md" fontWeight="500" mb="1" mt="3">
                Seniority
              </Text>
              {seniority.map((item) => (
                <Checkbox key={item}>{item}</Checkbox>
              ))}
              <Text fontSize="md" fontWeight="500" mb="1" mt="3">
                Salary expectations
              </Text>
              <Flex justifyContent="center" alignItems="center">
                <NumberInput defaultValue={0} mr="2">
                  <NumberInputField />
                </NumberInput>
                -
                <NumberInput defaultValue={30000} ml="2">
                  <NumberInputField />
                </NumberInput>
              </Flex>
              <Text fontSize="md" fontWeight="500" mb="1" mt="3">
                Employment Type
              </Text>
              {employmentType.map((item) => (
                <Checkbox key={item}>{item}</Checkbox>
              ))}
              <Text fontSize="md" fontWeight="500" mb="1" mt="3">
                Location
              </Text>
              <Text fontSize="md" fontWeight="500" mb="1" mt="3">
                Technologies
              </Text>
              <Button variant="solid" mt="4" colorScheme="blue">
                Search
              </Button>
            </Flex>
          </GridItem>
          <GridItem colSpan={5} mt="16">
            <Flex alignItems="center">
              <Text fontSize="md" color="gray.400">
                28 results
              </Text>
              <Spacer />
              <Flex alignItems="center">
                <Text fontSize="md" minWidth="16">
                  Sort by
                </Text>
                <Select>
                  <option value="price">Price</option>
                  <option value="date">Date</option>
                </Select>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              {[...Array(10)].map((_, index) => (
                <OfferCard key={index} />
              ))}
            </Flex>
            <Flex py="8" justifyContent="center">
              pagination
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Offers;

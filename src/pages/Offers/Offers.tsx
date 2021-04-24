import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import CheckboxGroup from "components/CheckboxGroup/CheckboxGroup";
import FilterSection from "components/FilterSection/FilterSection";
import Input from "components/Input/Input";
import OfferCard from "components/OfferCard/OfferCard";
import { FormikProvider, useFormik } from "formik";
import useOffersCollection from "hooks/useOffersCollection";
import React, { useState } from "react";

const seniority = ["Trainee", "Junior", "Mid", "Senior", "Expert"];

const employmentType = ["B2B", "Permanent", "Mandate contract"];

type Order = "createdAt" | "salaryFrom";

type OffersValues = {
  seniority: string[];
  salaryFrom: string;
  salaryTo: string;
  employmentType: string;
  locations: string;
  technologies: string[];
};

const Offers = () => {
  const [sortBy, setSortBy] = useState<Order>("createdAt");
  const formik = useFormik<OffersValues>({
    initialValues: {
      seniority: [],
      salaryFrom: "",
      salaryTo: "",
      employmentType: "",
      locations: "",
      technologies: [],
    },
    validateOnChange: true,
    onSubmit: () => {},
  });

  const [offers] = useOffersCollection({ limit: 10, orderBy: sortBy });

  return (
    <FormikProvider value={formik}>
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
            {offers?.length} Offers for mobile developers
          </Text>
          <Text fontSize="xl">Find your dream job!</Text>
        </Box>
        <Container pt="4" maxW="container.lg">
          <Grid templateColumns="repeat(7, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <Flex flexDirection="column" position="sticky" top="0">
                <FilterSection title="Seniority">
                  <CheckboxGroup
                    formik={formik}
                    name="seniority"
                    options={seniority}
                  />
                </FilterSection>
                <FilterSection title="Salary expectations">
                  <Flex justifyContent="center" alignItems="center">
                    <NumberInput defaultValue={0} mr="2">
                      <NumberInputField />
                    </NumberInput>
                    -
                    <NumberInput defaultValue={30000} ml="2">
                      <NumberInputField />
                    </NumberInput>
                  </Flex>
                </FilterSection>
                <FilterSection title="Employment Type">
                  <CheckboxGroup
                    formik={formik}
                    name="employmentType"
                    options={employmentType}
                  />
                </FilterSection>
                <FilterSection title="Location">
                  <Input
                    name="location"
                    formik={formik}
                    placeholder="Location"
                  />
                </FilterSection>
                <FilterSection title="Technologies"></FilterSection>
                <Button variant="solid" mt="4" colorScheme="blue">
                  Search
                </Button>
              </Flex>
            </GridItem>
            <GridItem colSpan={5}>
              <Flex alignItems="center">
                <Text fontSize="md" color="gray.400">
                  {offers?.length} results
                </Text>
                <Spacer />
                <Flex alignItems="center">
                  <Text fontSize="md" minWidth="16">
                    Sort by
                  </Text>
                  <Select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value as Order);
                    }}
                  >
                    <option value="salaryFrom">Price</option>
                    <option value="createdAt">Date</option>
                  </Select>
                </Flex>
              </Flex>
              <Flex flexDirection="column">
                {offers?.map((item) => (
                  <OfferCard key={item.id} {...item} />
                ))}
              </Flex>
              <Flex py="8" justifyContent="center">
                pagination
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </FormikProvider>
  );
};

export default Offers;

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Select as ChakraSelect,
  Spacer,
  Text,
} from "@chakra-ui/react";
import CheckboxGroup from "components/CheckboxGroup/CheckboxGroup";
import FilterSection from "components/FilterSection/FilterSection";
import Input from "components/Input/Input";
import OfferCard from "components/OfferCard/OfferCard";
import { FormikProvider, useFormik } from "formik";
import useOffersCollection, { Filter } from "hooks/useOffersCollection";
import React, { useState } from "react";

const seniority = ["Trainee", "Junior", "Mid", "Senior", "Expert"];

type Order = "createdAt" | "salaryFrom";

type OffersValues = {
  seniority: string[];
  salaryFrom: string;
  location: string;
};

const Offers = () => {
  const [sortBy, setSortBy] = useState<Order>("createdAt");
  const [filter, setFilter] = useState<Filter[]>([]);
  const formik = useFormik<OffersValues>({
    initialValues: {
      seniority: [],
      salaryFrom: "",
      location: "",
    },
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("🚀 ~ file: Offers.tsx ~ line 53 ~ Offers ~ values", values);
      let filters: Filter[] = [];

      Object.entries(values).forEach(([key, value]) => {
        if (value === "" || value.length === 0) {
          return;
        }

        if (key === "location") {
          filters.push({ key, operator: "==", value });
        }

        if (key === "salaryFrom") {
          filters.push({ key, operator: ">=", value });
        }

        if (key === "seniority") {
          filters.push({ key, operator: "array-contains-any", value });
        }
      });

      setFilter(filters);
    },
  });

  const [offers] = useOffersCollection({
    limit: 10,
    orderBy: "salaryFrom",
    filterBy: filter,
  });

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
            {offers?.length || 0} Offers for mobile developers
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
                    <Input
                      name="salaryFrom"
                      formik={formik}
                      placeholder="From"
                      type="number"
                    />
                  </Flex>
                </FilterSection>
                <FilterSection title="Location">
                  <Input
                    name="location"
                    formik={formik}
                    placeholder="Location"
                  />
                </FilterSection>
                <Button
                  variant="solid"
                  mt="4"
                  colorScheme="blue"
                  onClick={() => formik.handleSubmit()}
                >
                  Search
                </Button>
              </Flex>
            </GridItem>
            <GridItem colSpan={5}>
              <Flex alignItems="center">
                <Text fontSize="md" color="gray.400">
                  {offers?.length || 0} results
                </Text>
                <Spacer />
                <Flex alignItems="center">
                  <Text fontSize="md" minWidth="16">
                    Sort by
                  </Text>
                  <ChakraSelect
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value as Order);
                    }}
                  >
                    <option value="salaryFrom">Price</option>
                    <option value="createdAt">Date</option>
                  </ChakraSelect>
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

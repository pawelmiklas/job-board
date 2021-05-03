import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  List,
  Stack,
  Text,
} from "@chakra-ui/react";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { firestore } from "App";
import ListItemPerk from "components/ListItemPerk/ListItemPerk";
import OfferSection from "components/OfferSection/OfferSection";
import { Offer as OfferType } from "hooks/useOffersCollection";
import useOptions from "hooks/useOptions";
import React, { Fragment, useMemo } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { useParams } from "react-router";
import { intersectionOptions } from "../OfferAddEdit/OfferAddEdit.utils";
import NumberFormat from "react-number-format";
import GoBack from "components/GoBack/GoBack";

const OfferView = () => {
  const { id } = useParams<{ id: string }>();
  const [value] = useDocument<OfferType>(firestore.doc(`offers/${id}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const options = useOptions();
  const data = value?.data();
  const assignedLabelsOnValues = useMemo(
    () => intersectionOptions(options, data),
    [options, data]
  );

  return (
    <Box w="100%" minH="1000" color="gray.700">
      <Container pt="4" pb="12" maxW="container.lg">
        <GoBack />
        <Grid templateColumns="repeat(9, 1fr)" gap={4}>
          <GridItem colSpan={6} border="1px" borderColor="gray.300">
            <Flex p="4" pb="0">
              <Box>
                <Image
                  src={`https://picsum.photos/seed/${id}/200`}
                  htmlWidth="130"
                  borderRadius="10"
                />
              </Box>
              <Box pl="4">
                <Flex
                  direction="column"
                  justifyContent="space-evenly"
                  height="100%"
                >
                  <Text fontSize="3xl" fontWeight="600">
                    {data?.title}
                  </Text>
                  <Flex flexDirection="column">
                    <Box fontSize="md" color="gray.400" display="flex">
                      Company:
                      <Text color="gray.900" ml="1">
                        {data?.company}
                      </Text>
                    </Box>
                    <Box fontSize="md" color="gray.400" display="flex">
                      Company size:
                      <Text color="gray.900" ml="1">
                        {data?.companySize}
                      </Text>
                    </Box>
                    <Box fontSize="md" color="gray.400" display="flex">
                      Recruitment language:
                      <Text color="gray.900" ml="1">
                        {data?.language}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Flex flexDirection="column" p="4">
              <OfferSection title="Brief job description">
                {data?.description}
              </OfferSection>
              <OfferSection title="Must have">
                <Stack direction="row" mt="2">
                  {assignedLabelsOnValues?.mustHave.map((item) => (
                    <Badge key={item.value} colorScheme="blue">
                      {item.label}
                    </Badge>
                  ))}
                </Stack>
              </OfferSection>
              <OfferSection title="Nice to have">
                <Stack direction="row" mt="2">
                  {assignedLabelsOnValues?.niceToHave.map((item) => (
                    <Badge key={item.value} colorScheme="blue">
                      {item.label}
                    </Badge>
                  ))}
                </Stack>
              </OfferSection>
              <OfferSection title="Work methodology">
                <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                  {assignedLabelsOnValues?.workMethodology.map((item) => (
                    <Fragment key={item.value}>
                      <Text>{item.label}</Text>
                      <Flex alignItems="center">
                        <Box color="green.500">
                          <FontAwesomeIcon icon={faCheckSquare} />
                        </Box>
                        <Text ml="2">Yes</Text>
                      </Flex>
                    </Fragment>
                  ))}
                </Grid>
              </OfferSection>
              <OfferSection title="Offer details">
                <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                  {Object.entries(data?.offerDetails || {}).map(
                    ([key, value]) => (
                      <Fragment key={key}>
                        <Text>{key}</Text>
                        <Text color="gray.500">
                          {typeof value === "boolean" ? "Yes" : value}
                        </Text>
                      </Fragment>
                    )
                  )}
                </Grid>
              </OfferSection>
              <List>
                <OfferSection title="Perks in the office">
                  <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                    {assignedLabelsOnValues?.perks.map((item) => (
                      <ListItemPerk
                        key={item.value}
                        color="yellow.500"
                        text={item.label}
                      />
                    ))}
                  </Grid>
                </OfferSection>
              </List>
              <List>
                <OfferSection title="Benefits">
                  <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                    {assignedLabelsOnValues?.benefits.map((item) => (
                      <ListItemPerk
                        key={item.value}
                        color="green.500"
                        text={item.label}
                      />
                    ))}
                  </Grid>
                </OfferSection>
              </List>
            </Flex>
          </GridItem>
          <GridItem colSpan={3} position="sticky" top="16px">
            <Flex
              p="4"
              flexDirection="column"
              border="1px"
              borderColor="gray.300"
            >
              <Text fontSize="xl" fontWeight="600">
                <NumberFormat
                  value={data?.salaryFrom}
                  displayType="text"
                  thousandSeparator
                  suffix="$"
                />
              </Text>
              <Text
                fontSize="md"
                mt="-1"
                mb="3"
                fontWeight="400"
                color="gray.400"
              >
                + vat (B2B) per month
              </Text>
              <Divider />
              <Text fontSize="xl" fontWeight="600" mt="2">
                Possible job location
              </Text>
              <Text fontSize="md" fontWeight="400" color="gray.400">
                {data?.location}
              </Text>
              <Button variant="solid" colorScheme="blue" mt="3">
                Apply
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default OfferView;

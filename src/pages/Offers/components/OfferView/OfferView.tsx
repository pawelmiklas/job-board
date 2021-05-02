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
import { useDocument } from "react-firebase-hooks/firestore";
import { useParams } from "react-router";
import { Offer as OfferType } from "hooks/useOffersCollection";
import OfferSection from "components/OfferSection/OfferSection";
import React, { Fragment } from "react";

const OfferView = () => {
  const { id } = useParams<{ id: string }>();
  const [value] = useDocument<OfferType>(firestore.doc(`offers/${id}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const data = value?.data();

  return (
    <Box w="100%" minH="1000" color="gray.700">
      <Container pt="4" pb="12" maxW="container.lg">
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
                    <Text fontSize="md" color="gray.400" display="flex">
                      Company:
                      <Text color="gray.900" ml="1">
                        {data?.company}
                      </Text>
                    </Text>
                    <Text fontSize="md" color="gray.400" display="flex">
                      Company size:
                      <Text color="gray.900" ml="1">
                        {data?.companySize}
                      </Text>
                    </Text>
                    <Text fontSize="md" color="gray.400" display="flex">
                      Recruitment language:
                      <Text color="gray.900" ml="1">
                        {data?.languages.join(", ")}
                      </Text>
                    </Text>
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
                  {data?.mustHave.map((item) => (
                    <Badge key={item} colorScheme="blue">
                      {item}
                    </Badge>
                  ))}
                </Stack>
              </OfferSection>
              <OfferSection title="Nice to have">
                <Stack direction="row" mt="2">
                  {data?.niceToHave.map((item) => (
                    <Badge key={item} colorScheme="blue">
                      {item}
                    </Badge>
                  ))}
                </Stack>
              </OfferSection>
              <OfferSection title="Work methodology">
                <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                  {data?.workMethodology.map((item) => (
                    <Fragment key={item}>
                      <Text>{item}</Text>
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
                    {data?.perksInOffice.map((item) => (
                      <ListItemPerk key={item} color="yellow.500" text={item} />
                    ))}
                  </Grid>
                </OfferSection>
              </List>
              <List>
                <OfferSection title="Benefits">
                  <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                    {data?.benefits.map((item) => (
                      <ListItemPerk key={item} color="green.500" text={item} />
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
                {data?.salaryFrom} $
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

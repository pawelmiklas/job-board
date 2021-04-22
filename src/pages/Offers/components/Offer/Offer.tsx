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
import ListItemPerk from "components/ListItemPerk/ListItemPerk";
import React from "react";

interface Props {}

const Offer = (props: Props) => {
  return (
    <Box w="100%" minH="1000" color="gray.700">
      <Container pt="4" pb="12" maxW="container.lg">
        <Grid templateColumns="repeat(9, 1fr)" gap={4}>
          <GridItem colSpan={6} border="1px" borderColor="gray.300">
            <Flex p="4" pb="0">
              <Box>
                <Image
                  src="https://picsum.photos/200"
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
                    Senior IOS developer
                  </Text>
                  <Flex flexDirection="column">
                    <Text fontSize="md" color="gray.400" display="flex">
                      Company:
                      <Text color="gray.900" ml="1">
                        Shiji Poland
                      </Text>
                    </Text>
                    <Text fontSize="md" color="gray.400" display="flex">
                      Company size:
                      <Text color="gray.900" ml="1">
                        100+ people
                      </Text>
                    </Text>
                    <Text fontSize="md" color="gray.400" display="flex">
                      Recruitment language:
                      <Text color="gray.900" ml="1">
                        Polish, English
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Flex flexDirection="column" p="4">
              <Box spacing={3} mb="4">
                <Text fontWeight="600" fontSize="xl">
                  Brief job description
                </Text>
                <Text>
                  Ipsum ea irure occaecat esse irure deserunt ipsum nisi id
                  commodo sit fugiat velit. Incididunt consequat occaecat nisi
                  laboris magna deserunt minim elit anim. Ea non consequat
                  cillum laborum elit tempor deserunt nisi sunt dolore et in.
                  Enim ad in duis commodo nulla aute. Culpa commodo dolore amet
                  voluptate amet cillum. Cupidatat et labore reprehenderit
                  laborum deserunt.
                </Text>
              </Box>
              <Box spacing={3} mb="4">
                <Text fontWeight="600" fontSize="xl">
                  Must have
                </Text>
                <Stack direction="row" mt="2">
                  <Badge colorScheme="blue">Java</Badge>
                  <Badge colorScheme="blue">Git</Badge>
                  <Badge colorScheme="blue">RxJava</Badge>
                  <Badge colorScheme="blue">Dagger</Badge>
                  <Badge colorScheme="blue">Retrofit</Badge>
                  <Badge colorScheme="blue">Android</Badge>
                </Stack>
              </Box>
              <Box spacing={3} mb="4">
                <Text fontWeight="600" fontSize="xl">
                  Nice to have
                </Text>
                <Stack direction="row" mt="2">
                  <Badge colorScheme="blue">Typescript</Badge>
                  <Badge colorScheme="blue">React native</Badge>
                  <Badge colorScheme="blue">Flutter</Badge>
                  <Badge colorScheme="blue">English</Badge>
                  <Badge colorScheme="blue">Kotlin</Badge>
                </Stack>
              </Box>
              <Box spacing={3} mb="4">
                <Text fontWeight="600" fontSize="xl">
                  Work methodology
                </Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                  <Text>Agile management</Text>
                  <Flex alignItems="center">
                    <Box color="green.500">
                      <FontAwesomeIcon icon={faCheckSquare} />
                    </Box>
                    <Text ml="2">Yes</Text>
                  </Flex>
                  <Text>Knowledge repository</Text>
                  <Flex alignItems="center">
                    <Box color="green.500">
                      <FontAwesomeIcon icon={faCheckSquare} />
                    </Box>
                    <Text ml="2">Yes</Text>
                  </Flex>
                  <Text>Cloud infrastructure</Text>
                  <Flex alignItems="center">
                    <Box color="green.500">
                      <FontAwesomeIcon icon={faCheckSquare} />
                    </Box>
                    <Text ml="2">Yes</Text>
                  </Flex>
                </Grid>
              </Box>
              <Box spacing={3} mb="4">
                <Text fontWeight="600" fontSize="xl">
                  Offer details
                </Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                  <Text>Job profile</Text>
                  <Text color="gray.500">Mainly new features</Text>
                  <Text>Start</Text>
                  <Text color="gray.500">ASAP</Text>
                  <Text>Flexible hours</Text>
                  <Text color="gray.500">Yes</Text>
                  <Text>Contract duration</Text>
                  <Text color="gray.500">Permanent contract</Text>
                  <Text>Remote possible</Text>
                  <Text color="gray.500">Yes</Text>
                </Grid>
              </Box>
              <List spacing={3} mb="4">
                <Text fontWeight="600" fontSize="xl">
                  Perks in the office
                </Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <ListItemPerk color="yellow.500" text="hold pure dollar" />
                  <ListItemPerk color="yellow.500" text="blew window next" />
                  <ListItemPerk color="yellow.500" text="time green cap" />
                  <ListItemPerk
                    color="yellow.500"
                    text="grandmother dust sure"
                  />
                  <ListItemPerk color="yellow.500" text="putting such one" />
                </Grid>
              </List>
              <List spacing={3}>
                <Text fontWeight="600" fontSize="xl">
                  Benefits
                </Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <ListItemPerk color="green.500" text="hold pure dollar" />
                  <ListItemPerk color="green.500" text="blew window next" />
                  <ListItemPerk color="green.500" text="time green cap" />
                  <ListItemPerk
                    color="green.500"
                    text="grandmother dust sure"
                  />
                  <ListItemPerk color="green.500" text="putting such one" />
                </Grid>
              </List>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={3}
            border="1px"
            borderColor="gray.300"
            height="290"
            position="sticky"
            top="16px"
          >
            <Flex p="4" flexDirection="column">
              <Text fontSize="xl" fontWeight="600">
                12 000 - 15 000 PLN
              </Text>
              <Text fontSize="md" mt="-1" fontWeight="400" color="gray.400">
                + vat (B2B) per month
              </Text>
              <Text fontSize="xl" fontWeight="600" mt="2">
                10 000 - 13 000 PLN
              </Text>
              <Text
                fontSize="md"
                mt="-1"
                fontWeight="400"
                color="gray.400"
                mb="3"
              >
                gross (employment contract) per month
              </Text>
              <Divider />
              <Text fontSize="xl" fontWeight="600" mt="2">
                Possible job locations
              </Text>
              <Text fontSize="md" fontWeight="400" color="gray.400">
                Warsaw
              </Text>
              <Text fontSize="md" fontWeight="400" color="gray.400">
                Remotely
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

export default Offer;

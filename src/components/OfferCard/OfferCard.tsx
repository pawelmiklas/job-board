import { Badge, Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const OfferCard = (props: Props) => {
  return (
    <Box borderBottom="1px" p="4" borderColor="gray.200">
      <Flex py="2">
        <Box>
          <Image
            src="https://picsum.photos/200"
            htmlWidth="70"
            borderRadius="10"
          />
        </Box>
        <Box pl="4">
          <Flex direction="column">
            <Text fontSize="2xl">Senior IOS developer</Text>
            <Flex>
              <Text fontSize="md" mr="2">
                Netguru
              </Text>
              <Text fontSize="md">Kraków</Text>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize="md">6000$ - 9000$</Text>
        </Box>
      </Flex>
      <Flex py="2">
        <Text fontSize="md">
          Cupidatat tempor irure nisi eu ullamco voluptate qui nulla eiusmod
          labore sunt nostrud. Cupidatat tempor irure nisi eu ullamco voluptate
          qui nulla eiusmod labore sunt nostrud.
        </Text>
      </Flex>
      <Flex py="2">
        <Box>
          <Badge mr="1">Remote</Badge>
          <Badge mr="1">Full time</Badge>
          <Badge mr="1">IOS</Badge>
        </Box>
        <Spacer />
        <Box>
          <Text color="gray.500">21 August 2021</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default OfferCard;

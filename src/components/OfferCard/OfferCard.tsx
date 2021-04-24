import { Badge, Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { Offers } from "hooks/useOffersCollection";
import React from "react";
import { Link } from "react-router-dom";
import { dateFormat } from "utils/dateFormat";

type Props = Pick<
  Offers,
  | "id"
  | "benefits"
  | "company"
  | "createdAt"
  | "description"
  | "locations"
  | "salaryFrom"
  | "salaryTo"
  | "title"
>;

const OfferCard = ({
  benefits,
  company,
  createdAt,
  description,
  locations,
  salaryFrom,
  salaryTo,
  title,
  id,
}: Props) => {
  return (
    <Link to={`/offers/${id}`}>
      <Box borderBottom="1px" p="4" borderColor="gray.200">
        <Flex py="2">
          <Box>
            <Image
              src={`https://picsum.photos/seed/${id}/200`}
              htmlWidth="70"
              borderRadius="10"
            />
          </Box>
          <Box pl="4">
            <Flex direction="column">
              <Text fontSize="2xl">{title}</Text>
              <Flex>
                <Text fontSize="md" mr="2">
                  {company}
                </Text>
                <Text fontSize="md">{locations.join(", ")}</Text>
              </Flex>
            </Flex>
          </Box>
          <Spacer />
          <Box>
            <Text fontSize="md">{`${salaryFrom}$ - ${salaryTo}$`}</Text>
          </Box>
        </Flex>
        <Flex py="2">
          <Text fontSize="md">{description}</Text>
        </Flex>
        <Flex py="2">
          <Box>
            {benefits.map((item) => (
              <Badge mr="1">{item}</Badge>
            ))}
          </Box>
          <Spacer />
          <Box>
            <Text color="gray.500">{dateFormat(createdAt.seconds)}</Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};

export default OfferCard;

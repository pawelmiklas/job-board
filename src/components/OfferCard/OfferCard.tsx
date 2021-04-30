import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Offer } from "hooks/useOffersCollection";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { dateFormat } from "utils/dateFormat";

type OfferCardProps = Pick<
  Offer,
  | "id"
  | "benefits"
  | "company"
  | "createdAt"
  | "description"
  | "location"
  | "salaryFrom"
  | "salaryTo"
  | "title"
>;

const OfferCard = ({
  benefits,
  company,
  createdAt,
  description,
  location,
  salaryFrom,
  salaryTo,
  title,
  id,
}: OfferCardProps) => {
  const history = useHistory();

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
                <Text fontSize="md">{location}</Text>
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
              <Badge key={item} mr="1">
                {item}
              </Badge>
            ))}
          </Box>
          <Spacer />
          <Box>
            <Text color="gray.500">{dateFormat(createdAt.seconds)}</Text>
          </Box>
        </Flex>
        <Flex py="2">
          <Stack
            spacing={4}
            direction="row"
            align="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              colorScheme="red"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Usuń
            </Button>
            <Button
              colorScheme="teal"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                history.push(`offers/edit/${id}`);
              }}
            >
              Edytuj
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Link>
  );
};

export default OfferCard;

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
import { firestore } from "App";
import { Offer } from "hooks/useOffersCollection";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { dateFormat } from "utils/dateFormat";
import NumberFormat from "react-number-format";
import useOptions from "hooks/useOptions";

type OfferCardProps = Pick<
  Offer,
  | "id"
  | "benefits"
  | "company"
  | "createdAt"
  | "description"
  | "location"
  | "salaryFrom"
  | "title"
> & {
  withActions?: boolean;
};

const OfferCard = ({
  benefits,
  company,
  createdAt,
  description,
  location,
  salaryFrom,
  title,
  id,
  withActions = false,
}: OfferCardProps) => {
  const history = useHistory();
  const options = useOptions();
  const benefitLabels =
    options?.benefits.filter((item) => benefits.includes(item.value)) || [];

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
            <Text fontSize="md">
              <NumberFormat
                value={salaryFrom}
                displayType="text"
                thousandSeparator
                suffix="$"
              />
            </Text>
          </Box>
        </Flex>
        <Flex py="2">
          <Text fontSize="md">{`${description.slice(0, 350)}...`}</Text>
        </Flex>
        <Flex py="2">
          <Box>
            {benefitLabels.map((item) => (
              <Badge key={item.value} mr="1">
                {item.label}
              </Badge>
            ))}
          </Box>
          <Spacer />
          <Box>
            <Text color="gray.500">{dateFormat(createdAt.seconds)}</Text>
          </Box>
        </Flex>
        {withActions && (
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
                onClick={async (e) => {
                  e.preventDefault();

                  try {
                    await firestore.collection("offers").doc(id).delete();
                    toast.success("Offer was deleted successfully");
                  } catch (error) {
                    toast.error("Can't delete offer");
                  }
                }}
              >
                Delete
              </Button>
              <Button
                colorScheme="teal"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  history.push(`offers/edit/${id}`);
                }}
              >
                Edit
              </Button>
            </Stack>
          </Flex>
        )}
      </Box>
    </Link>
  );
};

export default OfferCard;

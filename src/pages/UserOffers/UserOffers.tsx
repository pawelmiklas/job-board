import { Button, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import AuthDashboardWrapper from "components/AuthDashboardWrapper/AuthDashboardWrapper";
import OfferCard from "components/OfferCard/OfferCard";
import useLocalStorage from "hooks/useLocalStorage";
import useOffersCollection from "hooks/useOffersCollection";
import React from "react";
import { useHistory } from "react-router";

const UserOffers = () => {
  const history = useHistory();
  const [user] = useLocalStorage<string | undefined>("userId", undefined);

  const [offers] = useOffersCollection({
    limit: 10,
    orderBy: "salaryFrom",
    filterBy: [
      {
        key: "userId",
        operator: "==",
        value: user,
      },
    ],
  });

  return (
    <AuthDashboardWrapper>
      <Grid gap={4}>
        <Flex py="2">
          <Stack
            spacing={4}
            direction="row"
            align="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              colorScheme="teal"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                history.push(`offers/add`);
              }}
            >
              Add offer
            </Button>
          </Stack>
        </Flex>
        <Flex flexDirection="column">
          {offers?.length ? (
            offers?.map((item) => (
              <OfferCard key={item.id} {...item} withActions />
            ))
          ) : (
            <Text textAlign="center">No active offers</Text>
          )}
        </Flex>
      </Grid>
    </AuthDashboardWrapper>
  );
};

export default UserOffers;

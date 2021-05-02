import { Button, Flex, Grid, Stack } from "@chakra-ui/react";
import { auth } from "App";
import AuthDashboardWrapper from "components/AuthDashboardWrapper/AuthDashboardWrapper";
import OfferCard from "components/OfferCard/OfferCard";
import useOffersCollection from "hooks/useOffersCollection";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";

const UserOffers = () => {
  const history = useHistory();
  const [user] = useAuthState(auth);

  const [offers] = useOffersCollection({
    limit: 10,
    orderBy: "salaryFrom",
    filterBy: [
      {
        key: "userId",
        operator: "==",
        value: user?.uid,
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
              Dodaj ofertę
            </Button>
          </Stack>
        </Flex>
        <Flex flexDirection="column">
          {offers?.map((item) => (
            <OfferCard key={item.id} {...item} withActions />
          ))}
        </Flex>
      </Grid>
    </AuthDashboardWrapper>
  );
};

export default UserOffers;

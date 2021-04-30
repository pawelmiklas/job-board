import { Flex, Grid } from "@chakra-ui/react";
import { auth } from "App";
import AuthDashboardWrapper from "components/AuthDashboardWrapper/AuthDashboardWrapper";
import OfferCard from "components/OfferCard/OfferCard";
import useOffersCollection from "hooks/useOffersCollection";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const UserOffers = () => {
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
        <Flex flexDirection="column">
          {offers?.map((item) => (
            <OfferCard key={item.id} {...item} />
          ))}
        </Flex>
      </Grid>
    </AuthDashboardWrapper>
  );
};

export default UserOffers;

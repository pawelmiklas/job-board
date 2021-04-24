import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const OfferSection = ({ title, children }: Props) => (
  <Box spacing={3} mb="4">
    <Text fontWeight="600" fontSize="xl">
      {title}
    </Text>
    {children}
  </Box>
);

export default OfferSection;

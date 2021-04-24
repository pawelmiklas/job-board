import React from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const FilterSection = ({ children, title }: Props) => (
  <>
    <Text fontSize="md" fontWeight="500" mb="1" mt="3">
      {title}
    </Text>
    {children}
  </>
);

export default FilterSection;

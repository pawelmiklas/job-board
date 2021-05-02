import React from "react";
import { Text } from "@chakra-ui/react";

type FilterSectionProps = {
  title: string;
  children?: React.ReactNode;
};

const FilterSection = ({ children, title }: FilterSectionProps) => (
  <>
    <Text fontSize="md" fontWeight="500" mb="1" mt="3">
      {title}
    </Text>
    {children}
  </>
);

export default FilterSection;

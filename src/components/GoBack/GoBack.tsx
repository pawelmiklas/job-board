import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";

const GoBack = () => {
  const history = useHistory();

  return (
    <Box
      w="100%"
      d="flex"
      alignItems="center"
      pb="3"
      onClick={() => {
        history.goBack();
      }}
      cursor="pointer"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <Text pl="3">Go back</Text>
    </Box>
  );
};

export default GoBack;

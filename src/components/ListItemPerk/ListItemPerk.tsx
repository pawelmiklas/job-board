import { IconProps, ListIcon, ListItem } from "@chakra-ui/react";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  text: string;
  color: IconProps["color"];
}

const ListItemPerk = ({ text, color }: Props) => (
  <ListItem display="flex" alignItems="center">
    <ListIcon color={color}>
      <FontAwesomeIcon icon={faCheckSquare} />
    </ListIcon>
    {text}
  </ListItem>
);

export default ListItemPerk;

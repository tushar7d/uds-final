/* eslint-disable react/prop-types */
import React from "react";
import { Flex } from "../index";

const Card = props => {
  return (
    <Flex column stretch top bg="white" borderRadius="2" p="4" {...props}>
      {props.children}
    </Flex>
  );
};
export default Card;

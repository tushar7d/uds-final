/* eslint-disable react/prop-types */
import React from "react";
import { Stack } from "../primitive";

const Card = props => {
  return (
    <Stack
      vertical
      left
      top
      width="100%"
      height="auto"
      bg="white"
      borderRadius="2"
      p="4"
      mb="3"
      {...props}
    >
      {props.children}
    </Stack>
  );
};
export default Card;

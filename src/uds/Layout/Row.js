import React from "react";
import { Flex } from "../index";

export default function Row(props) {
  return (
    <Flex row {...props}>
      {props.children}
    </Flex>
  );
}

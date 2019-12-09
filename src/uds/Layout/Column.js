import React from "react";
import { Flex } from "../index";

export default function Column(props) {
  return (
    <Flex column {...props}>
      {props.children}
    </Flex>
  );
}

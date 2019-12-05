/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Box, Icon, Text } from "../index";

const ToolBar = props => {
  return (
    <Stack
      horizontal
      split
      mid
      width="calc(100vw - 32px)"
      height="48px"
      bg="white"
      boxShadow="1"
      px="4"
      å
    >
      {props.back && (
        <Stack horizontal left mid>
          <Icon color={"accent.2"}>arrow_back </Icon>
          <Text type400 medium color="neutral__900">
            {props.title ? props.title : "Title"}
          </Text>
        </Stack>
      )}
    </Stack>
  );
};

export default ToolBar;

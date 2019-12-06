/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Text, Icon } from "../index";

const Button = props => {
  return (
    <div style={{ display: "inline-block" }}>
      {props.primary && (
        <Stack
          maxHeight="48px"
          horizontal
          mid
          center
          py={props.big ? 3 : 2}
          px="3"
          bg="accent.2"
          borderRadius="2"
          {...props}
        >
          {props.icon && (
            <Icon color={"white"} size="16px" mr="1">
              {props.icon}
            </Icon>
          )}
          <Text type400 medium color="white">
            {props.children ? props.children : "Add Text"}
          </Text>
        </Stack>
      )}
      {props.secondary && (
        <Stack
          maxHeight="48px"
          horizontal
          mid
          center
          py={props.big ? "11px" : "7px"}
          px="3"
          bg="white"
          borderRadius="2"
          style={{ border: "1px solid #CCCFDB" }}
          {...props}
        >
          {props.icon && (
            <Icon color={"accent.2"} size="16px" mr="1">
              {props.icon}
            </Icon>
          )}
          <Text type400 medium color="accent.2">
            {props.children ? props.children : "Add Text"}
          </Text>
        </Stack>
      )}
      {props.tertiary && (
        <Stack
          maxHeight="48px"
          horizontal
          mid
          center
          py={props.big ? "11px" : "7px"}
          px="3"
          bg="transparent"
          borderRadius="2"
          {...props}
        >
          {props.icon && (
            <Icon color={"accent.2"} size="16px" mr="1">
              {props.icon}
            </Icon>
          )}

          <Text type400 medium color="accent.2">
            {props.children ? props.children : "Add Text"}
          </Text>
        </Stack>
      )}
      {props.floating && (
        <Stack
          maxHeight="48px"
          horizontal
          mid
          center
          py={props.big ? "11px" : "7px"}
          px="3"
          bg="white"
          borderRadius="5"
          boxShadow="2"
          {...props}
        >
          {props.icon && (
            <Icon color={"accent.2"} size="16px" mr="1">
              {props.icon}
            </Icon>
          )}

          <Text type400 medium color="accent.2">
            {props.children ? props.children : "Add Text"}
          </Text>
        </Stack>
      )}
    </div>
  );
};

export default Button;

import React from "react";
import { Stack, Text, Icon } from "../index";

const Badge = props => (
  <Stack
    horizontal
    center
    mid
    bg={
      props.deal
        ? "brand.1"
        : props.negative
        ? "accent.5"
        : props.sponsor
        ? "white"
        : "accent.4"
    }
    py="1"
    px={props.children ? "2" : "0"}
    borderRadius="5"
    {...props}
  >
    {props.icon && (
      <Icon
        color={
          props.deal ? "brand.2" : props.sponsor ? "neutral__900" : "white"
        }
        size="16px"
      >
        {props.icon}
      </Icon>
    )}

    <Text
      type200
      medium
      color={props.deal ? "brand.2" : props.sponsor ? "neutral__900" : "white"}
    >
      {props.children}
    </Text>
  </Stack>
);

export default Badge;

/* eslint-disable react/prop-types */
import React from "react";
import { Flex, Text, Icon } from "../index";

const Button = props => {
  return (
    <Flex
      row
      mid
      center
      py={props.big ? 3 : 2}
      px="3"
      bg={props.primary ? "accent.2" : props.tertiary ? "transparent" : "white"}
      borderRadius={props.floating ? "5" : "3"}
      style={props.secondary ? { border: "1px solid #CCCFDB" } : null}
      boxShadow={props.floating && "2"}
      {...props}
    >
      {props.icon && (
        <Icon color={props.primary ? "white" : "accent.2"} size="16px" mr="1">
          {props.icon}
        </Icon>
      )}
      <Text type400 medium color={props.primary ? "white" : "accent.2"}>
        {props.children ? props.children : "Add Text"}
      </Text>
    </Flex>
  );
};

export default Button;

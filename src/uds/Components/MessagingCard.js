/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Text } from "../primitive";

const MessagingCard = props => {
  return (
    <Stack
      horizontal
      left
      mid
      height="auto"
      width="100%"
      bg="white"
      borderRadius="2"
      p="4"
      mb="3"
    >
      {props.icon && (
        <Stack
          horizontal
          center
          mid
          size="48px"
          bg={props.icon === true ? "background.2" : null}
          mr="2"
        >
          {props.icon}
        </Stack>
      )}
      <div style={{ width: "80%" }}>
        {props.heading && (
          <Text type300 bold color="neutral__700">
            {props.heading === true ? "Banner Heading" : props.heading}
          </Text>
        )}

        <Text color="neutral__700" type300>
          {props.text
            ? props.text
            : "A concise description of the information affecting trip or booking experience."}
        </Text>
        {props.link && (
          <Text type300 color="accent.2" mt="2">
            {props.link === true ? "This is a link" : props.link}
          </Text>
        )}
      </div>
    </Stack>
  );
};
export default MessagingCard;

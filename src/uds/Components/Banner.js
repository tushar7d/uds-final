/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Text } from "../primitive";

const Banner = props => {
  return (
    <Stack
      horizontal
      left
      mid
      width="100%"
      height="auto"
      bg="neutral__700"
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
          <Text type300 bold color="white">
            {props.heading === true ? "Banner Heading" : props.heading}
          </Text>
        )}

        <Text color="white" type300>
          {props.text
            ? props.text
            : "A concise description of the information affecting trip or booking experience."}
        </Text>
      </div>
    </Stack>
  );
};
export default Banner;

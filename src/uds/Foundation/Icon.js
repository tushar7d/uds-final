import * as React from "react";
import { Stack } from "../index";

const Icon = props => {
  return (
    <Stack
      horizontal
      center
      mid
      fontSize={props.size ? props.size : "24px"}
      color={props.color ? props.color : "neutral__900"}
    >
      <i
        style={{ fontSize: "inherit", color: "inherit" }}
        className={`icon-${props.children}`}
      />
    </Stack>
  );
};

export default Icon;

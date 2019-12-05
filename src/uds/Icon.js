import * as React from "react";
import { Stack } from "./primitive";

const Icon = props => {
  return (
    <Stack horizontal center mid fontSize={props.size} color={props.color}>
      <i
        style={{ fontSize: "inherit", color: "inherit" }}
        className="material-icons"
      >
        {props.children}
      </i>
    </Stack>
  );
};

export default Icon;

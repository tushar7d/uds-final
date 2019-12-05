import React from "react";
import { Stack, Button } from "./uds";

export default function Main() {
  return (
    <Stack bg="neutral__200" p="2">
      <Button primary mr="2">
        Button
      </Button>
      <Button secondary mr="2">
        Button
      </Button>
      <i className="icon-account_circle" />
    </Stack>
  );
}

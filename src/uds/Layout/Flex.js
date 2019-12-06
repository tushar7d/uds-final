/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import { Box } from "../primitive";

const jcr = styledMap`
  left: flex-start;
  right: flex-end;
  center: center;
  split: space-between;
  pad: space-around;
  default: flex-start;
`;
const jcc = styledMap`
  top: flex-start;
  bottom: flex-end;
  mid: center;
  split: space-between;
  pad: space-around;
  default: flex-start;
`;
const aic = styledMap`
  left: flex-start;
  right: flex-end;
  center: center;
  baseline: baseline;
  stretch: stretch;
  default: flex-start;
`;
const air = styledMap`
  top: flex-start;
  bottom: flex-end;
  mid: center;
  baseline: baseline;
  stretch: stretch;
  default: flex-start;
`;

const acr = styledMap`
  ctop: flex-start;
  cbottom: flex-end;
  cmid: center;
  csplit: space-between;
  cpad: space-around;
  cstretch: stretch;
  default: flex-start;
`;
const acc = styledMap`
  cleft: flex-start;
  cright: flex-end;
  ccenter: center;
  csplit: space-between;
  cpad: space-around;
  cstretch: stretch;
  default: flex-start;
`;
const StyledFlex = styled(Box)`
  display: flex;
  flex-direction: ${props => (props.row ? "row" : "column")};
  flex-wrap: ${props => (props.wrapthis ? "wrap" : "nowrap")};
  justify-content: ${props => (props.row ? jcr : jcc)};
  align-items: ${props => (props.row ? air : aic)};
  align-content: ${props => (props.wrapthis ? (props.row ? acr : acc) : null)};
  ${props => (props.fullwidth ? "flex: 1 1 auto;" : null)}
`;
const Flex = props => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};
export default Flex;

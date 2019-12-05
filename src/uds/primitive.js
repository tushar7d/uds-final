import styled from "styled-components";
import styledMap from "styled-map";
import {
  position,
  space,
  color,
  layout,
  borderRadius,
  border,
  boxShadow,
  size,
  typography,
  background,
  compose
} from "styled-system";

export const Box = styled("div")(
  compose(
    position,
    space,
    layout,
    color,
    borderRadius,
    border,
    boxShadow,
    background,
    size,
    typography
  )
);

Box.displayName = "Box";

const fd = styledMap`
  horizontal: row;
  vertical: column;
  default: row;
`;

const ai = styledMap`
  top: flex-start;
  bottom: flex-end;
  mid: center;
  stretch: stretch;
  default: flex-start;
`;

const aii = styledMap`
  left: flex-start;
  right: flex-end;
  center: center;
  stretch: stretch;
  default: flex-start;
`;

const jc = styledMap`
  left: flex-start;
  right: flex-end;
  center: center;
  split: space-between;
  around: space-around;
  
  default: flex-start;
`;
const jci = styledMap`
  top: flex-start;
  bottom: flex-end;
  mid: center;
  split: space-between;
  around: space-around;
  
  default: flex-start;
`;

function juscon(props) {
  // eslint-disable-next-line
  if (props.horizontal == true && props.vertical == null) {
    return jc;
  }
  // eslint-disable-next-line
  if (props.horizontal == null && props.vertical == true) {
    return jci;
  }
}

function aliitm(props) {
  // eslint-disable-next-line
  if (props.horizontal == true && props.vertical == null) {
    return ai;
    // eslint-disable-next-line
  } else if (props.horizontal == null && props.vertical == true) {
    return aii;
  }
}

export const Stack = styled(Box)`
  display: flex;
  flex-direction: ${fd};
  flex-wrap: ${props => (props.wrapit ? "wrap" : "nowrap")};
  justify-content: ${props => juscon(props)};
  align-items: ${props => aliitm(props)};
  flex-shrink: ${props => (props.shrink ? props.shrink : "1")};
`;
Stack.displayName = "Stack";

const tsize = styledMap`
  type100: 10px;
  type200: 12px;
  type300: 14px;
  type400: 16px;
  type500: 18px;
  type600: 22px;
  type700: 28px;
  type800: 36px;
  type900: 56px;
  default: 14px;
`;
const height = styledMap`
  type100: 12px;
  type200: 16px;
  type300: 18px;
  type400: 20px;
  type500: 22px;
  type600: 26px;
  type700: 32px;
  type800: 38px;
  type900: 56px;
  default: 18px;
`;
const weight = styledMap`
  normal: normal;
  medium: 500;
  bold: bold;
  default: normal
 
`;

export const Text = styled.div`

${typography}
${color}
${space}  
font-size: ${tsize};
line-height: ${height};
font-weight: ${weight};
white-space: ${props => (props.truncate ? `nowrap` : null)};
text-overflow:  ${props => (props.truncate ? `ellipsis` : null)};
`;

Text.displayName = "Text";

Text.h1 = Text.withComponent("h1");
Text.h2 = Text.withComponent("h2");
Text.h3 = Text.withComponent("h3");
Text.span = Text.withComponent("span");
Text.p = Text.withComponent("p");
Text.s = Text.withComponent("s");

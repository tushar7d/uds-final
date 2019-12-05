/* eslint-disable react/prop-types */
import React from "react";
import { Box } from "./primitive";

const Sticky = props => {
  let childref = React.createRef();
 
 

  return (
    <div>
      {props.top && (
        <Box height={props.topgap}>
          <Box ref={childref} position={"fixed"} top={0} left={0} right={0}>
            {props.children}
          </Box>
        </Box>
      )}
      {props.bottom && (
        <Box >
          <Box position={"fixed"} bottom={0} left={0} right={0}>
            {props.children}
          </Box>
        </Box>
      )}

    </div>
  );
};
export default Sticky;

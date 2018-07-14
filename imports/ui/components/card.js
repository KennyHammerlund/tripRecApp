import React from "react";
import styled from "react-emotion";

const Box = styled("div")`
  padding: 20px;
  border: 1px solid rgba(54, 64, 74, 0.08);
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin-bottom: 20px;
  background-color: #fff;
`;

export default ({ children, title, ...props }) => {
  // TODO: Support string titles and react components
  if (title)
    return (
      <Box>
        {title}
        {children}
      </Box>
    );
  return <Box {...props}>{children}</Box>;
};

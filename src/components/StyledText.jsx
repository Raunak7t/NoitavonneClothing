import styled from "styled-components";

import React from "react";

const ST = styled.span`
  font-family: "Montserrat", sans-serif;
`;

function StyledText({ children, className }) {
  return (
    <ST
      className={`bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent font-bold p-1 ${className}`}
    >
      {children}
    </ST>
  );
}

export default StyledText;

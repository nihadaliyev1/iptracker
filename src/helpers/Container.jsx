import React from "react";
import styled from "styled-components";

const Containerr = styled.div`
  max-width: 114rem;
  padding: 0 1.5rem;
  margin: 0 auto;
  width: 100%;
`;
const Container = ({ children }) => {
  return <Containerr>{children}</Containerr>;
};

export default Container;

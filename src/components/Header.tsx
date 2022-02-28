import React from "react";
import styled from "@emotion/styled";

interface IHeaderProps {
  title: string;
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  padding: 12px;
  height: 36px;
  background-color: #950740;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 32px;
`;

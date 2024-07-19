// src/components/TotalBalance.js
import React from 'react';
import styled from 'styled-components';

const BalanceContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const BalanceAmount = styled.h2`
  color: ${(props) => props.theme.primaryColor};
`;

const TotalBalance = ({ balance }) => {
  return (
    <BalanceContainer>
      <h1>Total Balance</h1>
      <BalanceAmount>${balance}</BalanceAmount>
    </BalanceContainer>
  );
};

export default TotalBalance;

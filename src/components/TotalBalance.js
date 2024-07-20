import React from 'react';
import styled from 'styled-components';

const BalanceContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  /* Responsive styles */
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
  }
`;

const BalanceAmount = styled.h2`
  color: ${(props) => props.theme.balanceTextColor};
  text-shadow: ${(props) => props.theme.balanceGlow}; /* Apply glowing effect based on the theme */

  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for tablets and smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Further adjust font size for small screens */
  }
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

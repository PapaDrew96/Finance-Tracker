// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.textColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Share Tech Mono', monospace; /* Match the font family */
`;

const Button = styled.button`
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 5px ${(props) => props.theme.primaryColor};
  font-size: 1rem;
  font-family: 'Share Tech Mono', monospace; /* Match the font family */
  text-shadow: 0 0 5px ${(props) => props.theme.accentColor}; /* Glowing effect for text */

  &:hover {
    background: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 10px ${(props) => props.theme.accentColor};
    text-shadow: 0 0 10px ${(props) => props.theme.accentColor}; /* Enhance glowing effect on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor};
  }
`;

const Header = ({ setPage }) => {
  return (
    <HeaderContainer>
      <Button onClick={() => setPage('dashboard')}>Dashboard</Button>
      <div>
        <Button onClick={() => setPage('addExpense')}>Add Expense</Button>
        <Button onClick={() => setPage('addIncome')}>Add Income</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;

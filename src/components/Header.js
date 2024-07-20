import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.textColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Share Tech Mono', monospace;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 5px ${(props) => props.theme.primaryColor};
  font-size: 1rem;
  font-family: 'Share Tech Mono', monospace;
  text-shadow: 0 0 5px ${(props) => props.theme.accentColor};

  &:hover {
    background: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 10px ${(props) => props.theme.accentColor};
    text-shadow: 0 0 10px ${(props) => props.theme.accentColor};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor};
  }
`;

const UserGreeting = styled.div`
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-top: 0;
    display: flex;
    align-items: center;
  }
`;

const Header = ({ setPage, user, onLogout }) => {
  return (
    <HeaderContainer>
      <ButtonGroup>
        <Button onClick={() => setPage('dashboard')}>Dashboard</Button>
        <Button onClick={() => setPage('addExpense')}>Add Expense</Button>
        <Button onClick={() => setPage('addIncome')}>Add Income</Button>
      </ButtonGroup>
      <UserGreeting>
        <span>Welcome, {user.displayName || 'User'}</span> {/* Display user's name */}
        <Button onClick={onLogout}>Logout</Button>
      </UserGreeting>
    </HeaderContainer>
  );
};

export default Header;

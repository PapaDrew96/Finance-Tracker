// src/components/Dashboard.js
import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;
`;

const Dashboard = ({ children }) => {
  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      <p>Overview of your financial status.</p>
      {children}
    </DashboardContainer>
  );
};

export default Dashboard;

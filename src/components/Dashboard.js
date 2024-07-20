// src/components/Dashboard.js
import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { fetchExpenses, calculateTotalBalance } from '../firebase/expenses';
import { getAuth } from 'firebase/auth';

const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;

  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 1.5rem; /* Adjust padding for tablets */
    border-radius: 8px; /* Slightly reduce border-radius for tablets */
  }

  @media (max-width: 480px) {
    padding: 1rem; /* Further reduce padding for mobile */
    border-radius: 5px; /* Reduce border-radius for mobile */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Adjust box-shadow for mobile */
  }

  h2 {
    font-size: 1.5rem; /* Adjust font size for h2 */
    margin-bottom: 1rem; /* Adjust margin-bottom for h2 */
    
    @media (max-width: 768px) {
      font-size: 1.3rem; /* Adjust font size for tablets */
    }

    @media (max-width: 480px) {
      font-size: 1.2rem; /* Adjust font size for mobile */
    }
  }

  p {
    font-size: 1rem; /* Base font size for paragraphs */
    
    @media (max-width: 768px) {
      font-size: 0.9rem; /* Adjust font size for tablets */
    }

    @media (max-width: 480px) {
      font-size: 0.8rem; /* Adjust font size for mobile */
    }
  }

  .balance {
    font-size: 1.25rem;
    margin-top: 1rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.15rem; /* Adjust font size for tablets */
    }

    @media (max-width: 480px) {
      font-size: 1rem; /* Adjust font size for mobile */
    }
  }

  .expenses-list {
    margin-top: 1rem;
    list-style-type: none;
    padding: 0;

    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid ${(props) => props.theme.borderColor};

      @media (max-width: 480px) {
        font-size: 0.9rem; /* Adjust font size for mobile */
      }
    }
  }
`;

const Dashboard = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();

  // Function to load data
  const loadExpensesAndBalance = useCallback(async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        setLoading(true); // Start loading state

        // Fetch expenses and balance for the authenticated user
        const expensesList = await fetchExpenses(user.uid);
        setExpenses(expensesList);

        const totalBalance = await calculateTotalBalance(user.uid);
        setBalance(totalBalance);
      } catch (error) {
        console.error('Error loading expenses and balance:', error);
        setError('Failed to load data.');
      } finally {
        setLoading(false); // End loading state
      }
    } else {
      setError('User not authenticated');
      setLoading(false); // End loading state even if there is no user
    }
  }, [auth]);

  // Load data when component mounts or user authentication state changes
  useEffect(() => {
    loadExpensesAndBalance();
  }, [loadExpensesAndBalance]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      <p>Overview of your financial status.</p>
      <div className="balance">Total Balance: ${balance.toFixed(2)}</div>
      <ul className="expenses-list">
        {expenses.length === 0 ? (
          <li>No expenses recorded yet.</li>
        ) : (
          expenses.map((expense) => (
            <li key={expense.id}>
              {expense.name}: ${expense.amount.toFixed(2)} on {new Date(expense.date.seconds * 1000).toLocaleDateString()}
            </li>
          ))
        )}
      </ul>
      {children}
    </DashboardContainer>
  );
};

export default Dashboard;

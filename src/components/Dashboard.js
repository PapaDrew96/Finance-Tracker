import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { fetchExpenses, calculateTotalBalance } from '../firebase/expenses';
import { getAuth } from 'firebase/auth';

const DashboardContainer = styled.div`
  /* Your styles here */
`;

const Dashboard = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();

  const loadExpensesAndBalance = useCallback(async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        setLoading(true);

        const expensesList = await fetchExpenses(user.uid);
        setExpenses(expensesList);

        const totalBalance = await calculateTotalBalance(user.uid);
        setBalance(totalBalance);
      } catch (error) {
        console.error('Error loading expenses and balance:', error);
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('User not authenticated');
      setLoading(false);
    }
  }, [auth]);

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
          expenses.map(expense => (
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

export default React.memo(Dashboard);

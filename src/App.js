// src/App.js
import './fonts.css';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './themes';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import TransactionList from './components/TransactionList';
import Statistics from './components/Statistics';
import ThemeSwitcher from './components/ThemeSwitcher';
import DatePickerModal from './components/DatePickerModal';
import EditTransactionForm from './components/EditTransactionForm';
import TotalBalance from './components/TotalBalance';

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  background: ${(props) => props.theme.backgroundColor};
`;

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addExpense = (expense) => {
    setTransactions([...transactions, { ...expense, type: 'expense' }]);
  };

  const addIncome = (income) => {
    setTransactions([...transactions, { ...income, type: 'income' }]);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setPage('editTransaction');
  };

  const handleDelete = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const handleSaveEdit = (updatedTransaction) => {
    setTransactions(transactions.map((transaction, index) =>
      index === editIndex ? updatedTransaction : transaction
    ));
    setEditIndex(null);
    setPage('dashboard');
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setPage('dashboard');
  };

  const calculateTotalBalance = () => {
    return transactions.reduce((total, transaction) => {
      return total + (transaction.type === 'income' ? transaction.amount : -transaction.amount);
    }, 0).toFixed(2);
  };

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return (
          <Dashboard>
            <TotalBalance balance={calculateTotalBalance()} />
            <Statistics transactions={transactions} />
            <TransactionList
              transactions={transactions}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Dashboard>
        );
      case 'addExpense':
        return <ExpenseForm onSubmit={addExpense} onClose={() => setPage('dashboard')} />;
      case 'addIncome':
        return <IncomeForm onSubmit={addIncome} onClose={() => setPage('dashboard')} />;
      case 'editTransaction':
        return (
          <EditTransactionForm
            transaction={transactions[editIndex]}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header setPage={setPage} />
      <ThemeSwitcher onToggle={toggleTheme} />
      <Container>
        {renderPage()}
        <DatePickerModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;

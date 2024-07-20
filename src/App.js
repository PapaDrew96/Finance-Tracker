import './fonts.css';
import React, { useState, useEffect, Suspense } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './themes';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import Statistics from './components/Statistics';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import EditTransactionForm from './components/EditTransactionForm';
import TotalBalance from './components/TotalBalance';
import Login from './components/Login';
import Signup from './components/Signup';
import { auth } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeSwitcher from './components/ThemeSwitcher';
import DatePickerModal from './components/DatePickerModal';

// Styled container for the app
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  background: ${(props) => props.theme.backgroundColor};
`;

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState('login');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editIndex, setEditIndex] = useState(null);
  const [user, setUser] = useState(null);

  // Auth state change listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setPage(currentUser ? 'dashboard' : 'login');
    });

    return () => unsubscribe();
  }, []);

  // Apply theme change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Toggle theme
  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  // Add expense
  const addExpense = (expense) => {
    setTransactions(prevTransactions => [...prevTransactions, { ...expense, type: 'expense' }]);
  };

  // Add income
  const addIncome = (income) => {
    setTransactions(prevTransactions => [...prevTransactions, { ...income, type: 'income' }]);
  };

  // Handle transaction edit
  const handleEdit = (index) => {
    setEditIndex(index);
    setPage('editTransaction');
  };

  // Handle transaction delete
  const handleDelete = (index) => {
    setTransactions(prevTransactions => prevTransactions.filter((_, i) => i !== index));
  };

  // Save edited transaction
  const handleSaveEdit = (updatedTransaction) => {
    setTransactions(prevTransactions => prevTransactions.map((transaction, index) =>
      index === editIndex ? updatedTransaction : transaction
    ));
    setEditIndex(null);
    setPage('dashboard');
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditIndex(null);
    setPage('dashboard');
  };

  // Calculate total balance
  const calculateTotalBalance = () => {
    return transactions.reduce((total, transaction) => (
      total + (transaction.type === 'income' ? transaction.amount : -transaction.amount)
    ), 0).toFixed(2);
  };

  // Handle login
  const handleLogin = (user) => {
    setUser(user);
    setPage('dashboard');
  };

  // Handle logout
  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      setPage('login');
    }).catch(error => {
      console.error('Error signing out:', error);
    });
  };

  // Render the appropriate page
  const renderPage = () => {
    if (!user) {
      return page === 'login' ? <Login onLogin={handleLogin} setPage={setPage} /> : <Signup onSignup={handleLogin} />;
    }

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
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          {user && <Header setPage={setPage} user={user} onLogout={handleLogout} />}
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
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;

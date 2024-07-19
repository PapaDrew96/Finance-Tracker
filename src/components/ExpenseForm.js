// src/components/ExpenseForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  background: ${(props) => props.theme.cardBackground};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

const ExpenseForm = ({ onSubmit, onClose }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      onSubmit({ description, amount: parseFloat(amount) });
      setDescription('');
      setAmount('');
      onClose();
    }
  };

  return (
    <FormContainer>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <Button type="submit">Add Expense</Button>
        <Button type="button" onClick={onClose}>Cancel</Button>
      </form>
    </FormContainer>
  );
};

export default ExpenseForm;
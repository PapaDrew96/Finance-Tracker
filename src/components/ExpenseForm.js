import React, { useState, useCallback } from 'react';
import { FormContainer, Button, Input } from './sharedStyles';

const ExpenseForm = ({ onSubmit, onClose }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  // Handle form submission
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (description && amount) {
      onSubmit({ description, amount: parseFloat(amount) });
      setDescription('');
      setAmount('');
      onClose();
    }
  }, [description, amount, onSubmit, onClose]);

  return (
    <FormContainer>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <div>
          <Button type="submit">Add Expense</Button>
          <Button type="button" onClick={onClose}>Cancel</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default ExpenseForm;

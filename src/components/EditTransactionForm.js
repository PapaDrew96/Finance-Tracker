// src/components/EditTransactionForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const EditTransactionForm = ({ transaction, onSave, onCancel }) => {
  const [name, setName] = useState(transaction.name);
  const [amount, setAmount] = useState(transaction.amount);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, amount });
  };

  return (
    <FormContainer>
      <h2>Edit Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </FormContainer>
  );
};

export default EditTransactionForm;

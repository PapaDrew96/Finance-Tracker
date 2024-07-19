// src/components/IncomeForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import DatePickerModal from './DatePickerModal';

const FormContainer = styled.div`
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  margin-bottom: 2rem;
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

const IncomeForm = ({ addIncome }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({ name, amount: parseFloat(amount), date });
    setName('');
    setAmount('');
    setDate(new Date());
  };

  return (
    <FormContainer>
      <h2>Add Income</h2>
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
        <div>
          <label>
            Date:
            <input
              type="text"
              value={date.toLocaleDateString('en-US')}
              onClick={() => setIsModalOpen(true)}
              readOnly
              required
            />
          </label>
        </div>
        <Button type="submit">Add Income</Button>
      </form>
      <DatePickerModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        selectedDate={date}
        onDateChange={(date) => {
          setDate(date);
          setIsModalOpen(false);
        }}
      />
    </FormContainer>
  );
};

export default IncomeForm;
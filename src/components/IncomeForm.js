import React, { useState, useCallback } from 'react';
import { FormContainer, Button, Input } from './sharedStyles';
import DatePickerModal from './DatePickerModal';

const IncomeForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle form submission
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (name && amount) {
      onSubmit({ name, amount: parseFloat(amount), date });
      setName('');
      setAmount('');
      setDate(new Date());
      onClose();
    }
  }, [name, amount, date, onSubmit, onClose]);

  // Handle date change
  const handleDateChange = useCallback((newDate) => {
    setDate(newDate);
    setIsModalOpen(false);
  }, []);

  return (
    <FormContainer>
      <h2>Add Income</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <Input
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
            <Input
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
            <Input
              type="text"
              value={date.toLocaleDateString('en-US')}
              onClick={() => setIsModalOpen(true)}
              readOnly
              required
            />
          </label>
        </div>
        <div>
          <Button type="submit">Add Income</Button>
          <Button type="button" onClick={onClose}>Cancel</Button>
        </div>
      </form>
      <DatePickerModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        selectedDate={date}
        onDateChange={handleDateChange}
      />
    </FormContainer>
  );
};

export default IncomeForm;

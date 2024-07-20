import React, { useState } from 'react';
import { FormContainer, Button, Input } from './sharedStyles';
import DatePickerModal from './DatePickerModal';

const IncomeForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, amount: parseFloat(amount), date });
    setName('');
    setAmount('');
    setDate(new Date());
    if (onClose) {
      onClose();  // Call onClose to close the form
    }
  };

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
        onDateChange={(date) => {
          setDate(date);
          setIsModalOpen(false);
        }}
      />
    </FormContainer>
  );
};

export default IncomeForm;

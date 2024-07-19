// src/components/DatePickerModal.js
import React from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const ModalContent = styled.div`
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

const Button = styled.button`
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 5px ${(props) => props.theme.primaryColor};
  font-size: 1rem;

  &:hover {
    background: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 10px ${(props) => props.theme.accentColor};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor};
  }
`;

const DatePickerModal = ({ isOpen, onRequestClose, selectedDate, onDateChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          maxWidth: '600px',
          margin: 'auto',
        },
      }}
    >
      <ModalContent>
        <h2>Select Date</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => onDateChange(date)}
          dateFormat="MMMM d, yyyy"
          className="date-picker"
        />
        <Button onClick={onRequestClose}>Close</Button>
      </ModalContent>
    </Modal>
  );
};

export default DatePickerModal;

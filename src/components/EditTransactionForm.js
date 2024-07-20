import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;

  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 1.5rem; /* Adjust padding for tablets */
    border-radius: 8px; /* Slightly reduce border-radius for tablets */
  }

  @media (max-width: 480px) {
    padding: 1rem; /* Further reduce padding for mobile */
    border-radius: 5px; /* Reduce border-radius for mobile */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Adjust box-shadow for mobile */
  }

  h2 {
    font-size: 1.5rem; /* Adjust font size for h2 */
    margin-bottom: 1rem; /* Adjust margin-bottom for h2 */
    
    @media (max-width: 768px) {
      font-size: 1.3rem; /* Adjust font size for tablets */
    }

    @media (max-width: 480px) {
      font-size: 1.2rem; /* Adjust font size for mobile */
    }
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 1rem;
      
      @media (max-width: 768px) {
        margin-bottom: 0.75rem; /* Adjust margin for tablets */
      }

      @media (max-width: 480px) {
        margin-bottom: 0.5rem; /* Further adjust margin for mobile */
      }
    }

    label {
      display: flex;
      flex-direction: column;
      font-size: 1rem;

      @media (max-width: 768px) {
        font-size: 0.9rem; /* Adjust font size for tablets */
      }

      @media (max-width: 480px) {
        font-size: 0.8rem; /* Adjust font size for mobile */
      }
    }

    input {
      margin-top: 0.5rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: ${(props) => props.theme.inputBackground};
      color: ${(props) => props.theme.inputTextColor};
      width: 100%;
      
      @media (max-width: 768px) {
        font-size: 0.9rem; /* Adjust font size for tablets */
      }

      @media (max-width: 480px) {
        font-size: 0.8rem; /* Adjust font size for mobile */
      }
    }

    button {
      background-color: ${(props) => props.theme.accentColor};
      color: ${(props) => props.theme.secondaryColor};
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s;
      font-size: 1rem;
      margin-right: 1rem;
      margin-top: 1rem;
      
      @media (max-width: 768px) {
        padding: 0.5rem 1rem; /* Adjust padding for tablets */
        font-size: 0.9rem; /* Adjust font size for tablets */
      }

      @media (max-width: 480px) {
        padding: 0.5rem 0.75rem; /* Further adjust padding for mobile */
        font-size: 0.8rem; /* Adjust font size for mobile */
      }

      &:hover {
        background-color: ${(props) => props.theme.primaryColor};
        box-shadow: 0 0 5px ${(props) => props.theme.primaryColor};
      }
    }

    button[type="button"] {
      background-color: ${(props) => props.theme.primaryColor};
      margin-right: 0; /* Remove margin-right for the second button */
    }
  }
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
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </FormContainer>
  );
};

export default EditTransactionForm;

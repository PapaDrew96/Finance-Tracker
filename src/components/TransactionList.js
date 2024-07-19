// src/components/TransactionList.js
import React from 'react';
import styled from 'styled-components';

const TransactionListContainer = styled.div`
  margin-bottom: 2rem;
`;

const TransactionItem = styled.li`
  background: ${(props) => props.theme.cardBackground};
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.transaction.type === 'expense' ? '#F44336' : '#4CAF50'};
`;

const TransactionList = ({ transactions, onEdit, onDelete }) => {
  return (
    <TransactionListContainer>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} transaction={transaction}>
            {transaction.description} - ${transaction.amount}
            <div>
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          </TransactionItem>
        ))}
      </ul>
    </TransactionListContainer>
  );
};

export default TransactionList;

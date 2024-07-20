// src/components/formStyles.js
import styled from 'styled-components';

export const FormWrapper = styled.div`
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const FormButton = styled.button`
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

export const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  background: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.inputTextColor};
  font-size: 1rem;

  &:focus {
    border-color: ${(props) => props.theme.accentColor};
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

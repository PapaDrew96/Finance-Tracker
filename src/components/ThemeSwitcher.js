// src/components/ThemeSwitcher.js
import React from 'react';
import styled from 'styled-components';

const SwitchButton = styled.button`
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 5px ${(props) => props.theme.primaryColor};
  font-size: 1rem;
  font-family: 'Share Tech Mono', monospace; /* Apply the same font family */
  text-shadow: 0 0 5px ${(props) => props.theme.accentColor}; /* Glowing effect for text */

  &:hover {
    background: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 10px ${(props) => props.theme.accentColor};
    text-shadow: 0 0 10px ${(props) => props.theme.accentColor}; /* Enhance glowing effect on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor};
  }
`;

const ThemeSwitcher = ({ onToggle }) => {
  return (
    <SwitchButton onClick={onToggle}>
      Switch Theme
    </SwitchButton>
  );
};

export default ThemeSwitcher;

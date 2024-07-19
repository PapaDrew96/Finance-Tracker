import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  primaryColor: '#4CAF50',
  secondaryColor: '#ffffff',
  accentColor: '#FFC107',
  backgroundColor: '#f4f4f9',
  textColor: '#000000',
  cardBackground: '#ffffff',
  inputBackground: '#ffffff', // Light background for inputs
  inputTextColor: '#000000',  // Dark text for inputs
  textShadow: 'none', // No glow for light theme
};

export const darkTheme = {
  primaryColor: '#1E1E2F',
  secondaryColor: '#ffffff', // White text color
  accentColor: '#6272A4',
  backgroundColor: '#121212',
  textColor: '#ffffff', // White text for dark theme
  cardBackground: '#1E1E2F',
  inputBackground: '#2E2E3A', // Dark background for inputs
  inputTextColor: '#ffffff',  // White text for inputs
  textShadow: '0 0 5px #ffffff', // White glow effect
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Share Tech Mono', monospace;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
  }

  header {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: 'Share Tech Mono', monospace;
  }

  header h1 {
    margin: 0;
    font-size: 2rem;
    text-shadow: ${(props) => props.theme.textShadow}; /* Apply text shadow for glowing effect */
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }

  nav ul li {
    margin: 0 1rem;
    cursor: pointer;
    transition: color 0.3s;
    color: ${(props) => props.theme.textColor}; /* Ensure text color is applied */
  }

  nav ul li:hover {
    color: ${(props) => props.theme.accentColor};
    text-decoration: underline;
  }

  .container {
    padding: 2rem;
  }

  form {
    background: ${(props) => props.theme.cardBackground};
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  form h2 {
    margin-top: 0;
    color: ${(props) => props.theme.textColor}; /* Ensure form headers are in the correct color */
  }

  input[type="text"],
  input[type="number"] {
    width: calc(100% - 2rem);
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: ${(props) => props.theme.inputBackground}; /* Darker background for inputs */
    color: ${(props) => props.theme.inputTextColor}; /* Input text color */
  }

  button {
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.secondaryColor}; /* Ensure button text is white */
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 5px ${(props) => props.theme.accentColor};
    font-size: 1rem;
    font-family: 'Share Tech Mono', monospace;
    text-shadow: ${(props) => props.theme.textShadow}; /* Glowing effect */
  }

  button:hover {
    background-color: ${(props) => props.theme.primaryColor};
    box-shadow: 0 0 10px ${(props) => props.theme.primaryColor};
    text-shadow: ${(props) => props.theme.textShadow}; /* Enhance glowing effect on hover */
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor};
  }

  .transactions ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .transactions li {
    background: ${(props) => props.theme.cardBackground};
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    transition: background-color 0.3s, box-shadow 0.3s;
    color: ${(props) => props.theme.textColor}; /* Ensure transaction text color is applied */
  }

  .transactions li:hover {
    background-color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  .theme-switcher {
    cursor: pointer;
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    transition: background-color 0.3s;
    box-shadow: 0 0 5px ${(props) => props.theme.primaryColor};
    text-shadow: ${(props) => props.theme.textShadow}; /* Apply text shadow for glowing effect */
  }

  .theme-switcher:hover {
    background-color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 10px ${(props) => props.theme.accentColor};
    text-shadow: ${(props) => props.theme.textShadow}; /* Enhance glowing effect on hover */
  }

  .collapsible {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    cursor: pointer;
    padding: 1rem;
    border: none;
    text-align: left;
    outline: none;
    font-size: 1.2rem;
    transition: background-color 0.3s;
    border-radius: 5px;
    margin-bottom: 1rem;
    text-shadow: ${(props) => props.theme.textShadow}; /* Apply text shadow for glowing effect */
  }

  .active, .collapsible:hover {
    background-color: ${(props) => props.theme.accentColor};
  }

  .content {
    padding: 0 1rem;
    display: none;
    overflow: hidden;
    background-color: ${(props) => props.theme.cardBackground};
    border-radius: 0 0 5px 5px;
  }

  .content.show {
    display: block;
  }
`;

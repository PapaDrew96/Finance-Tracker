import React, { Component } from 'react';

// ErrorBoundary component class
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state to display fallback UI on error
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // Log error details to the console or an error reporting service
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // You can also send error details to an error logging service here
  }

  // Render fallback UI if there is an error
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

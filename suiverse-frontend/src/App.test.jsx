import { render, screen } from '@testing-library/react';
import App from './App';
import './App.css'

test('renders the app header', () => {
  render(<App />);
  // Check if the header is rendered
  const headerElement = screen.getByText(/Welcome to SUIverse/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  // Check if navigation links are present
  const createDDiLink = screen.getByText(/Create DDi/i);
  const creditScoreLink = screen.getByText(/Credit Score/i);
  const loanRequestLink = screen.getByText(/Loan Request/i);

  expect(createDDiLink).toBeInTheDocument();
  expect(creditScoreLink).toBeInTheDocument();
  expect(loanRequestLink).toBeInTheDocument();
});

test('renders CreateDDI component when route is matched', () => {
  render(<App />);
  // Test that the "Create DDI" link takes us to the CreateDDI page
  const createDDiLink = screen.getByText(/Create DDi/i);
  createDDiLink.click();
  
  const createDDiElement = screen.getByText(/Create your Digital Decentralized Identity/i);
  expect(createDDiElement).toBeInTheDocument();
});


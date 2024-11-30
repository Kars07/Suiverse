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
  const createDDILink = screen.getByText(/Create DDI/i);
  const creditScoreLink = screen.getByText(/Credit Score/i);
  const loanRequestLink = screen.getByText(/Loan Request/i);

  expect(createDDILink).toBeInTheDocument();
  expect(creditScoreLink).toBeInTheDocument();
  expect(loanRequestLink).toBeInTheDocument();
});

test('renders CreateDDI component when route is matched', () => {
  render(<App />);
  // Test that the "Create DDI" link takes us to the CreateDDI page
  const createDDILink = screen.getByText(/Create DDI/i);
  createDDILink.click();
  
  const createDDIElement = screen.getByText(/Create your Digital Decentralized Identity/i);
  expect(createDDIElement).toBeInTheDocument();
});
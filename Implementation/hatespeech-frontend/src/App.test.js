import { render, screen } from '@testing-library/react';
import App from './App';


// Defining a test using the testing library
test('renders learn react link', () => {
  render(<App />); // Render the 'App' component
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from "@testing-library/react";
import App from '../App'

test('Test App component', () => {
  render(<App />)
  const app = screen.getByText("Hello React");
  expect(app).toBeInTheDocument();
})

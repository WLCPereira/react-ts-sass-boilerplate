import React from 'react';
import { render, screen } from "@testing-library/react";
import Button from '..'

describe('Test Button component', () => {
  it('should render a Button', () =>  {
    render(<Button data-testid="myButton">Click me</Button>)
    const btn = screen.getByTestId("myButton")
    expect(btn).toBeInTheDocument();
  });
});

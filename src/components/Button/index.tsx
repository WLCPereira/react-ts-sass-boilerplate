import React from 'react';
import { ButtonProps } from './types';
import "./button.scss";

export default function Button({ children, className, ...props }: ButtonProps) {
  return <button {...props} className={`app-btn ${className || ''}`}>{children}</button>;
}

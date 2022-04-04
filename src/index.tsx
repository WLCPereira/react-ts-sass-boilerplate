import React from 'react'
import { render } from 'react-dom'
import App from './App'
import '@Styles/reset.scss';

const rootElement = document.querySelector('#root') as Element;

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, rootElement);

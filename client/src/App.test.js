import React from 'react';
import App from './App';

import { render, fireEvent } from '@testing-library/react'


test('renders without crashing', () => {
  render(<App/>)
})

test('title displays correctly', ()=>{
  render(<App/>).getByText(`Players in the 2019 Women's World Cup`)
})

test('toggle dark mode button adds class "dark-mode" to the body', ()=>{
  const container = render(<App/>)
  const button = container.getByText('Toggle Dark Mode')
  fireEvent.click(button)
  expect(document.body.classList.contains('dark-mode')).toBe(true)
})
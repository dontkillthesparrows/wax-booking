import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

test('renders booking button', () => {
  render(<LandingPage />);
  const bookingButton = screen.getByText(/booking/i);
  expect(bookingButton).toBeInTheDocument();
});

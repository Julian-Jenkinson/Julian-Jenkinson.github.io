import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LandingSection from './LandingSection';
import React from 'react';

// Mock the useSubmit hook
jest.mock('../hooks/useSubmit', () => {
  return () => ({
    isLoading: false,
    response: null,
    submit: jest.fn(),
  });
});

test("check a first name is entered, email is valid, and message more than 25 characters", async () => {
  const { submit } = require('../hooks/useSubmit')();

  render(<LandingSection />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email address/i);
  const messageInput = screen.getByLabelText(/your message/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  // Fill out the form
  fireEvent.change(nameInput, { target: { value: 'testName' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'This is a message with more than 25 characters.' } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(submit).toHaveBeenCalledWith(
      expect.stringContaining('http'), // URL string
      expect.objectContaining({
        firstName: 'testName',
        email: 'test@example.com',
        comment: 'This is a message with more than 25 characters.',
      })
    );
  });
});


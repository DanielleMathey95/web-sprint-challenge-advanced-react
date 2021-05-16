import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  expect(screen.getByText(/Checkout Form/i));
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const { getByLabelText } = screen;
  const firstName = getByLabelText(/first name/i);
  userEvent.type(firstName, "Danielle");
  expect(firstName).toHaveValue("Danielle");

  const lastName = getByLabelText(/last name/i);
  userEvent.type(lastName, "Mathey");
  expect(lastName).toHaveValue("Mathey");

  const address = getByLabelText(/address/i);
  userEvent.type(address, "1234 Fake Street");
  expect(address).toHaveValue("1234 Fake Street");

  const city = getByLabelText(/city/i);
  userEvent.type(city, "Nowhere");
  expect(city).toHaveValue("Nowhere");

  const state = getByLabelText(/state/i);
  userEvent.type(state, "Nevada");
  expect(state).toHaveValue("Nevada");

  const zip = getByLabelText(/zip/i);
  userEvent.type(zip, "12345");
  expect(zip).toHaveValue("12345");


  const button = screen.getByRole("button");
  userEvent.click(button);

  const success = screen.getByText(/you have ordered/i);
  expect(success).toBeInTheDocument();


  screen.debug();
});

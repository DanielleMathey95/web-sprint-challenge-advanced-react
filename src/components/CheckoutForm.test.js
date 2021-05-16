import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

const firstName = "Danielle";
const lastName = "Mathey";
const address = "1234 Fake Street";
const city = "Nowhere";
const state = "Nevada";
const zipcode = "12345";

test("form header renders", () => {
  render(<CheckoutForm />);

  expect(screen.getByText(/Checkout Form/i));
});

test("form shows success message on submit with form details", async () => {});

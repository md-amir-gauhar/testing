/*
 * Greet should render the text hello and if a name is paased to the components
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet should render", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);

  expect(textElement).toBeInTheDocument();
});

test("Greet should render the name passed", () => {
  render(<Greet name="Amir" />);

  const textElement = screen.getByText(/hello amir/i);

  expect(textElement).toBeInTheDocument();
});

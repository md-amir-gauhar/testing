import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("renders hello word", () => {
  render(<Greet />);

  //   const textElement = screen.getByText("Hello World");

  //  regext to check if the string in present or not
  const textElement = screen.getByText(/hello world/i);

  expect(textElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Beer Factory text", () => {
  render(<App />);
  const textElement = screen.getByText("Beer Factory");
  expect( textElement).toBeInTheDocument();
});

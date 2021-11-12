import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});

describe("App component", () => {
  it("renders App component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Optimax Energy Challenge/i)).toBeInTheDocument();
  });
});

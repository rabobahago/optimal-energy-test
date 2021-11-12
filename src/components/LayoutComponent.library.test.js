import React from "react";
import { render, screen } from "@testing-library/react";
import LayoutComponent from "./LayoutComponent";

describe("LayoutComponent", () => {
  it("renders a button with text add grid", () => {
    render(<LayoutComponent />);
    screen.getByText("Add Grid");
    expect(screen.getByText("Add Grid")).toBeInTheDocument();
  });
});

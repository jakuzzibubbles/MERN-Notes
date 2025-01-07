import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home/Home.jsx";
import { BrowserRouter } from "react-router-dom";

describe("Home Component", () => {
  it("renders static content correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Check if button for adding a note is rendered
    const addButton = screen.getByRole("button", { name: /add/i });
    expect(addButton).toBeInTheDocument();

    // Check if the title of the page or some static text is rendered
    const message = screen.getByText("Start creating your first note!"); // You can adjust based on what is static
    expect(message).toBeInTheDocument();
  });
});

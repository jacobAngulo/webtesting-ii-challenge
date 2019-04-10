import React from "react";
import App from "./App";
import "jest-dom/extend-expect";
import { render, fireEvent } from "react-testing-library";

describe("<App />", () => {
  it("renders the App component succesfully", () => {
    render(<App />);
  });

  it("increments the strikes counter when the strike button is clicked", () => {
    const { getByText } = render(<App />);

    const button = getByText(/strike/i);

    fireEvent.click(button);
    getByText(/strikes: 1/i);
  });

  it("increments up to  two strikes", () => {
    const { getByText } = render(<App />);

    const button = getByText(/strike/i);

    fireEvent.click(button);
    getByText(/strikes: 2/i);
  });
});

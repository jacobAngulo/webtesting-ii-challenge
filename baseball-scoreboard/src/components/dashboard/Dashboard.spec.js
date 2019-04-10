import React from "react";
import { render } from "react-testing-library";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("renders the Dashboard component succesfully", () => {
    render(<Dashboard />);
  });
});

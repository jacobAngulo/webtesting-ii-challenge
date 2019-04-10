import React from "react";
import { render } from "react-testing-library";

import Display from "./Display";

describe("<Display />", () => {
  it("renders the Display component succesfully", () => {
    render(<Display />);
  });
});

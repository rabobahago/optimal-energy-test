import React from "react";
import { shallow } from "enzyme";
import LayoutComponent from "./LayoutComponent";

it("expect to render LayoutComponent", () => {
  expect(shallow(<LayoutComponent />)).toMatchSnapshot();
});

import React from "react";
import AddCar from "./components/AddCar";
import TestRenderer from "react-test-renderer";

it("renders a snapshot", () => {
  const tree = TestRenderer.create(<AddCar />).toJSON();
  expect(tree).toMatchSnapshot();
});

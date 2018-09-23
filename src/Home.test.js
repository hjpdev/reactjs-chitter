import React from "react";
import Home from "./Home";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const component = renderer.create(<Home />);

test("renders peeps", async () => {
  expect.assertions(1);
  return component.renderPeeps();
});

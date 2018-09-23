import Enzyme, { mount } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

const wrapper = Enzyme.shallow(<Button />);

it("should render a <TouchableOpacity/>", () => {
  expect(wrapper.find("TouchableOpacity")).toHaveLength(1);
});

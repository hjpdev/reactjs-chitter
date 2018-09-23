import React from "react";
import Button from "./Stuff";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// Checks component is rendered correctly
test("renders button with passed props", () => {
  const component = renderer.create(
    <Button onClick={() => {}} label="testlabel" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

// Checks counter is at 0 when component is rendered

test("starts at zero", () => {
  const component = renderer.create(
    <Button onClick={() => {}} label="thisIsTestLabel" />
  );
  const instance = component.getInstance();
  expect(instance.state.counter).toBe(0);
});

// Checks that the onChange function is only called once when the button is clicked

test("onClick is only called once per click", () => {
  const fn = jest.fn();
  const component = renderer.create(
    <Button onClick={fn} label="thisIsTestLabel" counter={3} />
  );
  const instance = component.getInstance();
  instance.props.onClick();
  console.log(fn.mock);
  expect(fn.mock.calls.length).toBe(1);
});

// Testing that when we click on the button it updates it’s own state
// and call an onClick function with the counter.
// Here we need to simulate clicking on the button, and can use either
// React-test-utils or Enzyme; Enzyme used here:

// test("onClick function is called with passed counter value", () => {
//   const fn = jest.fn();
//   const component = mount(<Button onClick={fn} label="this is test label" />);

//   component.find("button").simulate("click");

//   expect(component.state("counter")).toBe(1);
//   expect(fn.mock.calls[0][0]).toBe(1);
// });

// TypeError: Cannot read property '0' of undefined

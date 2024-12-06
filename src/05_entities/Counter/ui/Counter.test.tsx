import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from '06_shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event'


describe("Counter", () => {
  test("render test", () => {
    componentRender(<Counter />, {
      initialState: {counter: {value: 10}}
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent('10');
  });
  test("increment", () => {
    componentRender(<Counter />, {
      initialState: {counter: {value: 10}}
    });
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId("value-title")).toHaveTextContent('10');
  });
  test("decrement", () => {
    componentRender(<Counter />, {
      initialState: {counter: {value: 10}}
    });
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId("value-title")).toHaveTextContent('10');
  });
});

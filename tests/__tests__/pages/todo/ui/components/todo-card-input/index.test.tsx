import React from "react";
import TodoComponentsTodoCardInput from "../../../../../../../src/pages/todo/ui/screens/main";
import { render } from "../../../../../../testsSetup/test-utils";
import { fireEvent, screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

let addListFunc: Function;
beforeEach(() => {
  addListFunc = jest.fn();
});

describe("Components Todo Card Input", () => {
    test("snapshot - Components Todo Card Input", () => {
      const tree = render(<TodoComponentsTodoCardInput />);
      expect(tree).toMatchSnapshot();
    });

    test("Components Todo Card Input - click to input", () => {
      const { getByTestId } = render(<TodoComponentsTodoCardInput />);
      const inputEl = getByTestId("task-input-click") as HTMLInputElement;
      userEvent.click(inputEl);
      expect(inputEl.value).toBe(undefined);

      expect(inputEl.className).toBe(
        "MuiInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-adornedStart css-1vdbjvs-MuiInputBase-root-MuiInput-root"
      );
    });

  test("Components Todo Card Input - input value", () => {
    const { getByTestId } = render(<TodoComponentsTodoCardInput />);
    const contentInput = getByTestId("task-input");
    fireEvent.change(contentInput, {
      target: { value: "some text for input 123!@#$%^&*()_+" },
    });
    const inputEl = getByTestId("task-input") as HTMLInputElement;
    expect(inputEl.value).toBe("some text for input 123!@#$%^&*()_+");
  });

  test("Components Todo Card Input - enter non-empty value", () => {
    const { getByTestId } = render(<TodoComponentsTodoCardInput />);
    const contentInput = getByTestId("task-input");
    fireEvent.change(contentInput, {
      target: { value: "some text for input 123!@#$%^&*()_+" },
    });
    const inputEl = getByTestId("task-input") as HTMLInputElement;
    fireEvent.keyPress(inputEl, { key: 'Enter', keyCode: 13 });
    expect(inputEl.value).toBe("");
  });
});

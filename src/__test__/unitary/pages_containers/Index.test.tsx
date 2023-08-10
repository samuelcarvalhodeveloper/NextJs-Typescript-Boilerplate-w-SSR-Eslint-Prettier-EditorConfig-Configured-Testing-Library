import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Index from "../../../pages_container/Index";
import { PAGE_MAIN_HEADER_ELEMENT_INNER_TEXT } from "../../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Index Container Behavior", () => {
  test("Test If Elements Were Correctly Placed Correctly", () => {
    const { getAllByText } = render(<Index />);

    expect(getAllByText(PAGE_MAIN_HEADER_ELEMENT_INNER_TEXT)).toBeTruthy();
  });
});

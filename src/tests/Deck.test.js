import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// import { render, unmountComponentAtNode } from "react-dom";
// import { create } from "react-test-renderer";
// import { act } from "react-dom/test-utils";
// import pretty from "pretty";

import { ThemeProvider } from "styled-components";

import theme from "../shared/theme";
import Deck from "../shared/components/Deck";

afterEach(cleanup);

const renderWithTheme = () => {
  return render(
    <ThemeProvider theme={theme}>
      <Deck
        title="test title"
        firstCardName="first card test"
        tags={["tag 1", "tag 2"]}
      />
    </ThemeProvider>
  );
};

it("Renders with Deck Title", () => {
  const { getByText } = renderWithTheme();

  // const deckTitle = getByText("test title").textContent;
  // expect(deckTitle).toBe("test title");

  expect(getByText(/test title/i)).toBeInTheDocument();
});

it("Renders with Tags", () => {
  const fakeTags = ["tag 1", "tag 2"];

  const { getAllByTestId } = renderWithTheme();

  const componentTags = getAllByTestId("tag").map(li => li.textContent);
  expect(componentTags).toEqual(fakeTags);
});

it("Renders with First Card Name", () => {
  const { getByText } = renderWithTheme();

  const firstCardName = getByText("first card test").textContent;
  expect(firstCardName).toBe("first card test");
});

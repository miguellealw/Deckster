import React from "react";

// RTL
import { render, cleanup } from "utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

// Component
import Deck from "../shared/components/Deck";

afterEach(cleanup);

it("Renders with Deck Title", () => {
  const { getByText } = render(
    <Deck
      title="test title"
      firstCardName="first card test"
      tags={["tag 1", "tag 2"]}
    />
  );

  // const deckTitle = getByText("test title").textContent;
  // expect(deckTitle).toBe("test title");

  expect(getByText(/test title/i)).toBeInTheDocument();
});

it("Renders with Tags", () => {
  const fakeTags = ["tag 1", "tag 2"];

  const { getAllByTestId } = render(
    <Deck
      title="test title"
      firstCardName="first card test"
      tags={["tag 1", "tag 2"]}
    />
  );

  const componentTags = getAllByTestId("tag").map(li => li.textContent);
  expect(componentTags).toEqual(fakeTags);
});

it("Renders with First Card Name", () => {
  const { getByText } = render(
    <Deck
      title="test title"
      firstCardName="first card test"
      tags={["tag 1", "tag 2"]}
    />
  );

  const firstCardName = getByText("first card test").textContent;
  expect(firstCardName).toBe("first card test");
});

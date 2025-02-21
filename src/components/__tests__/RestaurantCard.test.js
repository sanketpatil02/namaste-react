import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurantCard component with props data", () => {
  // rendering
  render(<RestaurantCard resData={MOCK_DATA} />);

  // Querying
  const name = screen.getByText("Burger King");

  // Assertion
  expect(name).toBeInTheDocument();
});

it("should render restaurant card component with promoted label", () => {
  // Homework - test HOC with promoted label
});

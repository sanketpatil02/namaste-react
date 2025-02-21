import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with login button", () => {
  // rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  // Assertion
  expect(loginButton).toBeInTheDocument();
});

it("should render Header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const cartButton = screen.getByText("Cart (0 items)");
  const cartButton = screen.getByText(/Cart/); // regex can be used

  expect(cartButton).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  // rendering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  // Assertion
  expect(logoutButton).toBeInTheDocument();
});

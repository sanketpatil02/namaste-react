import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
 -Logo
 -Nav Items
Body
 -Search
 -RestaurantContainer
  -RestaurantCard
Footer
 -Copyright
 -Link
 -Address
 -Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/b0/1e/69/b01e69dfd04399324803c453b0fb9029.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

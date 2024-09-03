import React from "react";
import ReactDOM from "react-dom/client";

// React element
const title = <h1 className="head">Namaste react🚀 using JSX</h1>;

// alternate syntax
const HeadingComponent = () => (
  <div className="container">
    {/* this is component composition */}
    {title}
    <h1 className="heading">Namaste react🚀 functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

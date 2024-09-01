import React from "react";
import ReactDOM from "react-dom/client";

// React element
// React.createElement (creates object) => object => (after rendering it to DOM, it becomes->) HTML element
/*
const heading = React.createElement("h1", { id: "heading" }, "Namaste react🚀");
console.log(heading);
*/

// JSX - HTML-like or XML-like syntax
const jsxHeading = <h1 className="head">Namaste react🚀 using JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// default exportに対応
// import App from "./App";
// named exportに対応
// import { App } from "./App";
import { Todo } from "./Todo";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <Todo />
  </StrictMode>,
);

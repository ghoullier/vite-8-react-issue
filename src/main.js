import { StrictMode, createElement } from "react";
import { createRoot } from "react-dom/client";

import SimpleSlider from "./SimpleSlider.js";

createRoot(document.getElementById("root")).render(
  createElement(StrictMode, null, createElement(SimpleSlider, null)),
);

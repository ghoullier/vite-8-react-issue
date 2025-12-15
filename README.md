# Vite@8 `react` issue

> [!NOTE]
> This repository is a reproduction of the issue [vitejs/rolldown-vite#560](https://github.com/vitejs/rolldown-vite/issues/560).

## Description

`src/SimpleSlider.js`

```js
import { createElement } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return createElement(
    Slider,
    Object.assign({}, settings),
    createElement("div", null, createElement("h3", null, "Slide 1")),
    createElement("div", null, createElement("h3", null, "Slide 2")),
    createElement("div", null, createElement("h3", null, "Slide 3")),
  );
}
```

## Expected Behavior (vite@7.2.7)

![vite@7.2.7](./docs/vite@7.png "vite@7.2.7")

App is rendered correctly

## Current Behavior (vite@8.0.0-beta.2)

Application crash at runtime

```console
react-dom_client.js?v=5c726b42:2819 Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.

Check the render method of `SimpleSlider`.
    at createFiberFromTypeAndProps (react-dom_client.js?v=5c726b42:2819:21)
    at createFiberFromElement (react-dom_client.js?v=5c726b42:2830:11)
    at reconcileChildFibersImpl (react-dom_client.js?v=5c726b42:3815:373)
    at react-dom_client.js?v=5c726b42:3871:28
    at reconcileChildren (react-dom_client.js?v=5c726b42:5388:50)
    at updateFunctionComponent (react-dom_client.js?v=5c726b42:5576:4)
    at beginWork (react-dom_client.js?v=5c726b42:6142:20)
    at runWithFiberInDEV (react-dom_client.js?v=5c726b42:853:66)
    at performUnitOfWork (react-dom_client.js?v=5c726b42:8431:94)
    at workLoopSync (react-dom_client.js?v=5c726b42:8327:37)
```

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

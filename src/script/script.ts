// for IE11
import "core-js/stable";
import "regenerator-runtime/runtime";

import { InView } from "./module/InView";

document.addEventListener("DOMContentLoaded", (event) => {
  const inView = new InView();
  inView.init();

  (document.querySelectorAll("*") as NodeListOf<HTMLElement>).forEach(
    (elem, i) => {
      console.log(elem);
    }
  );
});

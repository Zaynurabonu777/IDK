import countries from "./data.js";
import { UpdateUi } from "./updataUI.js";

let InputE1 = document.querySelector(".input");
let SelectE1 = document.querySelector("#region");

InputE1.addEventListener("input", (e) => {
  console.log(e.target.value);
  let inputValue = e.target.value.trim();
  let filterArr = countries.filter((item) => {
    console.log(item.name);

    return item.name.toLowerCase().includes(inputValue.toLowerCase);
  });

  UpdateUi(filterArr);
});

SelectE1.addEventListener("change", (e) => {
  let res = e.target.value;

  let filterArr = countries.filter(
    (item) => item.region.toLowerCase() == res.toLowerCase()
  );

  UpdateUi(filterArr);
});
import countries from "./data.js";

// elements
let U1E1 = document.querySelector(".countries");

export function UpdateUi(arr) {
  U1E1.innerHTML = " ";
  arr.forEach((item) => {
    let { flag, name, population, region, capital } = item;

    U1E1.innerHTML += `
        <li class="country">
          <img src="${flag || name}" alt="${name}">
          <div class="county__intro">
            <h4 class="name">${name}</h4>
            <p>population: <span>${population}</span></p>
            <p>Region: <span class="region">${region}</span></p>
            <p>Capital: <span>${capital}</span></p>
          </div>
        </li>`;
  });
}

UpdateUi(countries);
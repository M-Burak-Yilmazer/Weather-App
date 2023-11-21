const API_KEY = "9320e4868173e1067703c2f944848784";
import { show } from "./public/show";

export const getFetch = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=tr`
  )
    .then((response) => response.json())
    .then((data) => show(data))
    .catch((err) => err);
};

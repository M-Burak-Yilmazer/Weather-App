import { getFetch } from "../fetch";

export const getCity = () => {
  document.getElementById("searchbar").addEventListener("input", () => {
    const text = document.getElementById("searchbar").value;
    getFetch(text);
  });
};


// export const city = () => {
//   const text = "";
//   document.getElementById("searchbar").addEventListener("input", () => {
//     text = document.getElementById("searchbar").value;
//   });
//   return text;
// };

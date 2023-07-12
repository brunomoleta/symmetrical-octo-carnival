import { getUserInfo } from "./fetch.js";
import { removeInvalid, renderInvalid } from "./invalid.js";
import {
  cleanArticle,
  renderAll,
} from "./render.js";


export const getInputValue = () => {
  const form = document.querySelector("#form");
  const inputValue = document.querySelector("#search-user");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const resolvedObject = await getUserInfo(inputValue.value);
    if (resolvedObject) {
      cleanArticle();
      removeInvalid();
      renderAll(resolvedObject);
    } else {
      renderInvalid(inputValue.value);
    }
  });
};

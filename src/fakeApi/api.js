import { paintings } from "./paintings";
import { authors } from "./authors";
import { locations } from "./locations";

function getWithDelay(data) {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 1000);
  });
}

function getPaintings() {
  return getWithDelay(paintings);
}

function getAuthors() {
  return getWithDelay(authors);
}
function getLocations() {
  return getWithDelay(locations);
}

export const API = {
  getPaintings,
  getAuthors,
  getLocations
};

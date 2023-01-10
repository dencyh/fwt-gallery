const THEME = "fwt-gallery-theme";

function setTheme(theme) {
  localStorage.setItem(THEME, theme);
}

function getTheme() {
  return localStorage.getItem(THEME);
}

export const localStorageService = {
  setTheme,
  getTheme
};

/* eslint-disable */

(function () {
  var THEME = 'theme';
  var DARK = 'dark';
  var LIGHT = 'light';

  var preferredTheme;
  try {
    preferredTheme = localStorage.getItem(THEME);
  } catch (error) {}

  var darkMediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

  setTheme(preferredTheme || (darkMediaQueryList.matches ? DARK : LIGHT));

  darkMediaQueryList.addListener(function (e) {
    if (!preferredTheme) {
      setTheme(e.matches ? DARK : LIGHT);
    }
  });

  function setTheme(newTheme) {
    window.__theme = newTheme;

    if (newTheme === DARK) {
      document.documentElement.classList.add(DARK);
    } else if (newTheme === LIGHT) {
      document.documentElement.classList.remove(DARK);
    }
  }

  window.__setPreferredTheme = function (newTheme) {
    preferredTheme = newTheme;
    setTheme(newTheme);

    try {
      localStorage.setItem(THEME, newTheme);
    } catch (error) {}
  };
})();

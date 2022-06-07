import style from './themes.css';

/** Applies the selected theme to the element. */
function Theme(element) {
  const _themes = {
    green: 'green',
  };

  const apply = function (themeName) {
    element.classList.add(_themes[themeName]);
    return element;
  };

  return { apply };
}

export { Theme };

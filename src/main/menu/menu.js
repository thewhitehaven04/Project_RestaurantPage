import menuRepository from './menuCard/model/menuRepository';
import menuCard from './menuCard/menuCard';
import style from './menu.css';

export default function menu(menuEntryCount) {
  const _styleClasses = {
    gridMenu: 'grid-menu',
  };

  function render() {
    const div = document.createElement('div');
    div.classList.add(_styleClasses.gridMenu);

    menuRepository()
      .getItems(0, menuEntryCount)
      .forEach((model) => {
        div.appendChild(menuCard(model).render());
      });

    return div;
  }

  return { render };
}

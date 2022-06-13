import menuRepository from './menuCard/model/menuRepository';
import menuCard from './menuCard/menuCard';
import style from './menu.css';
import { SoftShadowed } from '../../generic/shadowed/shadowed';

export default function menu(menuEntryCount) {
  const _styleClasses = {
    gridMenu: 'grid-menu',
    menuStyle: 'menu-style',
  };

  function render() {
    const div = document.createElement('div');
    div.classList.add(...[_styleClasses.gridMenu, _styleClasses.menuStyle]);

    menuRepository()
      .getItems(0, menuEntryCount)
      .forEach((model) => {
        div.appendChild(menuCard(model).render());
      });

    return SoftShadowed(div).wrap();
  }

  return { render };
}

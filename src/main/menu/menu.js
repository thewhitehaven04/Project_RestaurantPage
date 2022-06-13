import menuRepository from './menuCard/model/menuRepository';
import menuCard from './menuCard/menuCard';
import style from './menu.css';
import { SoftShadowed } from '../../generic/shadowed/shadowed';
import { Theme } from '../../generic/theme/theme';

export default function menu(menuEntryCount) {
  const _styleClasses = {
    gridMenu: 'grid-menu',
    menuStyle: 'menu-style',
  };

  function render() {
    const divContainer = document.createElement('div');
    const div = document.createElement('div');

    divContainer.appendChild(div);
    divContainer.classList.add(_styleClasses.menuStyle);
    div.classList.add(_styleClasses.gridMenu);

    menuRepository()
      .getItems(0, menuEntryCount)
      .forEach((model) => {
        div.appendChild(menuCard(model).render());
      });

    return Theme(SoftShadowed(divContainer).wrap()).apply('white');
  }

  return { render };
}

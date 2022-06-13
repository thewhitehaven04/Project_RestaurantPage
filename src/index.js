import normalize from 'normalize.css';
import headerComponent from './header/header';
import style from './style.css';
import home from './main/home/home';
import about from './main/about/about';
import menu from './main/menu/menu';
import mainComponent from './main/main';

const RestaurantPageApp = function () {
  const divRoot = document.querySelector('#content');

  function initComponents(props) {
    const main = mainComponent();
    const navHeaderComponent = headerComponent({
      Home: () => main.showTab(home().render()),
      Menu: () => main.showTab(menu(props.menuEntryCount).render()),
      About: () => main.showTab(about().render()),
    });

    divRoot.appendChild(navHeaderComponent.render());
    divRoot.appendChild(main.render());
  }

  function _setBackground() {
    divRoot.classList.add('background-fit');
  }

  function run(props) {
    _setBackground();
    initComponents(props);
  }

  return { run };
};

// high-level app configuration
const appProps = {
  menuEntryCount: 4,
};

RestaurantPageApp().run(appProps);

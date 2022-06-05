import normalize from 'normalize.css';
import headerComponent from './header/header';
import style from './style.css';
import home from './main/home/home';
import about from './main/about/about';
import order from './main/order/order';
import menu from './main/menu/menu';
import mainComponent from './main/main';

const RestaurantPageApp = function () {
  const divRoot = document.querySelector('#content');

  function initComponents() {
    const main = mainComponent();
    const navHeaderComponent = headerComponent({
      Home: () => main.showTab(home().render()),
      Menu: () => main.showTab(menu()),
      'Order Online': () => main.showTab(order()),
      About: () => main.showTab(about()),
    });

    divRoot.appendChild(navHeaderComponent.render());
    divRoot.appendChild(main.render());
  }
  function _setBackground() {
    divRoot.classList.add('background-fit');
  }

  function run() {
    _setBackground();
    initComponents();
  }

  return { run };
};

const app = RestaurantPageApp();
app.run();

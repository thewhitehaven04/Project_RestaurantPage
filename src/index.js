import normalize from 'normalize.css';
import header from './header/header';
import style from './style.css';
import home from './main/home/home';
import about from './main/about/about';
import order from './main/order/order';
import menu from './main/menu/menu';
import mainComponent from './main/main';
const divRoot = document.querySelector('#content');
divRoot.classList.add('background-fit');

const main = mainComponent();
const navHeaderComponent = header({
  Home: () => main.showTab(home),
  About: () => main.showTab(about),
  Menu: () => main.showTab(menu),
  'Order Online': () => main.showTab(order),
});

divRoot.appendChild(navHeaderComponent.render());
divRoot.appendChild(main.render());

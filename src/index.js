import normalize from 'normalize.css';
import header from './header/header';
import style from './style.css';

const divRoot = document.querySelector('#content');

const navHeader = header(['Home', 'Menu', 'Order online', 'About']);
divRoot.appendChild(navHeader);

import navBar from './header/navbar/navbar';
import normalize from 'normalize.css';

const divRoot = document.querySelector('#content');

divRoot.appendChild(navBar(['Fish Corner', 'Story', 'Menu', 'About']));

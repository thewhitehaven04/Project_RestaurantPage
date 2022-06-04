import style from './header.css';
import navBar from './navbar/navbar';
import logo from './logo/logo';

export default function header(navBarTabNames) {
  const headerElement = document.createElement('header');
  headerElement.classList.add('header-flex');
  headerElement.classList.add("header-font");

  const nav = navBar(navBarTabNames);
  nav.classList.add('header-navbar');

  headerElement.appendChild(nav);
  return headerElement;
}

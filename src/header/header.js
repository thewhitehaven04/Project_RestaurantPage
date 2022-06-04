import style from './header.css';
import navBar from './navbar/navbar';

export default function headerComponent(tabCallbackMapping) {
  const headerElement = document.createElement('header');
  headerElement.classList.add('header-flex');
  headerElement.classList.add('header-font');

  const nav = navBar(tabCallbackMapping);
  headerElement.appendChild(nav);
  return headerElement;
}

import style from './header.css';
import navBar from './navbar/navbar';

export default function headerComponent(tabCallbackMapping) {
  /** Render the header */
  function render() {
    const headerElement = document.createElement('header');

    const headerClasses = ['header-flex', 'header-font'];
    headerElement.classList.add(...headerClasses);

    const nav = navBar(tabCallbackMapping);
    headerElement.appendChild(nav);
    return headerElement;
  }

  return { render };
}

import style from './header.css';
import navBar from './navbar/navbar';

export default function headerComponent(tabCallbackMapping) {
  /** Renders the header element with the specified tab names */  
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

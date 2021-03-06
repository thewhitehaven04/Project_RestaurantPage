import style from './navbar.css';

/** Renders the navbar. Accepts `tabCallbackMapping` object that contains the names of tabs as keys and 
 * callback functions that render the necessary tab elsewhere as their respective values */
export default function navBarComponent(tabCallbackMapping) {
  const divWrapper = document.createElement('div');
  divWrapper.classList.add(...['navbar-spacing', 'underline']);

  const ulBar = document.createElement('ul');
  ulBar.classList.add(...['flex-nav', 'li-no-style']);

  for (let tabKey in tabCallbackMapping) {
    const liTab = document.createElement('li');
    liTab.textContent = tabKey;
    liTab.classList.add('menu-items');
    liTab.addEventListener('click', () => {
      tabCallbackMapping[tabKey]();
    });

    ulBar.appendChild(liTab);
  }
  divWrapper.appendChild(ulBar);
  return divWrapper;
}

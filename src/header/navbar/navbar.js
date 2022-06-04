import style from './navbar.css';

export default function navBarComponent(tabCallbackMapping) {
  const divWrapper = document.createElement('div');
  divWrapper.classList.add(...['navbar-spacing', 'underline']);

  const ulBar = document.createElement('ul');
  ulBar.classList.add(...['flex-nav', 'li-no-style']);

  for (tabKey of tabCallbackMapping) {
    const liTab = document.createElement('li');
    liTab.textContent = tabKey;
    liTab.classList.add('menu-items');

    liTab.addEventListener('click', (event) => {
      tabCallbackMapping[tabKey]();
    });

    ulBar.appendChild(liTab);
  }
  divWrapper.appendChild(ulBar);
  return divWrapper;
}

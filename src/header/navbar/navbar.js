import style from './navbar.css';

export default function navBar(navBarTabNames) {
  const divWrapper = document.createElement('div');
  divWrapper.classList.add(...['navbar-spacing', 'underline']);

  const ulBar = document.createElement('ul');
  ulBar.classList.add(...['flex-nav', 'li-no-style']);

  navBarTabNames.forEach((tabName) => {
    const liTab = document.createElement('li');
    liTab.textContent = tabName;
    liTab.classList.add('menu-items');
    ulBar.appendChild(liTab);
  });

  divWrapper.appendChild(ulBar);
  return divWrapper;
}

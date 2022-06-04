import style from './navbar.css';

export default function navBar(navBarTabNames) {
  const ulBar = document.createElement('ul');
  ulBar.classList.add(...['flex-nav', 'li-no-style']);

  navBarTabNames.forEach((tabName) => {
    const liTab = document.createElement('li');
    liTab.textContent = tabName;
    ulBar.appendChild(liTab);
  });

  return ulBar;
}

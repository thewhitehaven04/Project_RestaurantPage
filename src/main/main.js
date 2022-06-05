import style from './main.css';
export default function mainComponent() {
  const main = document.createElement('main');
  main.classList.add(...['main-centered', 'main-flex', 'main-white']);

  function render() {
    return main;
  }

  function showTab(tabElement) {
    main.replaceChildren(tabElement);
  }
  return { render, showTab };
}

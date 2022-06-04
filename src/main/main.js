export default function mainComponent() {
  const main = document.createElement('main');

  function render() {
    return main;
  }

  function showTab(tabElement) {
    main.children.array.forEach((element) => {
      main.removeChild(element);
    });
    main.appendChild(tabElement);
  }

  return { render, showTab };
}

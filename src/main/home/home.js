import scheduleEntryComponent from '../about/entry/schedule_entry';
import style from './home.css';
import logo from './image/bass-fish-white-outline.png';

export default function home() {
  const _styleClasses = {
    textCentered: 'flex-title',
    title: 'title',
    image: 'image-main-scalable',
  };

  function _renderImageResponsive(width, height) {
    const img = new Image();
    img.src = logo;
    img.classList.add(_styleClasses.image);
    
    return img; 
  }

  function _renderTitle(titleText) {
    const divText = document.createElement('div');
    divText.textContent = titleText; 
    divText.classList.add(_styleClasses.title);
    return divText
  }

  function render() {
    const div = document.createElement('div');
    div.classList.add(_styleClasses.textCentered);

    div.appendChild(_renderTitle('Fish Corner'));
    div.appendChild(_renderImageResponsive(500, 500));
    
    console.dir(div);
    return div;
  }

  return { render };
}

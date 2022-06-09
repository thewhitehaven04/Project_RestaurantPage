import scheduleEntryComponent from '../about/entry/schedule_entry';
import style from './home.css';
import logo from './image/bass-fish-black.png';

export default function home() {
  const _styleClasses = {
    textCentered: 'flex-title',
    title: 'title',
  };

  function render() {
    const div = document.createElement('div');
    div.classList.add(_styleClasses.textCentered);

    const divText = document.createElement('div');
    divText.textContent = 'Fish corner';
    divText.classList.add(_styleClasses.title);

    const img = new Image(400, 400);
    img.src = logo;

    div.appendChild(divText);
    div.appendChild(img);
    
    return div;
  }

  return { render };
}

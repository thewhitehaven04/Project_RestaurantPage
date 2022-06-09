import style from './about.css';
import scheduleEntryComponent from './entry/schedule_entry';

export default function about() {
  const _styleClasses = {
    homeFlex: 'home-flex',
  };

  function render() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add(_styleClasses.homeFlex);

    /** Different schedule entries */
    const entries = ['Weekdays', 'Saturday', 'Sunday'];

    entries.forEach((day) => containerDiv.appendChild(scheduleEntryComponent(day).render()));
    return containerDiv;
  }

  return { render };
}

import style from './about.css';
import scheduleEntryComponent from './entry/schedule_entry';
import { SoftShadowed } from './../../generic/shadowed/shadowed';
import { Theme } from './../../generic/theme/theme';

export default function about() {
  const _styleClasses = {
    homeFlex: 'home-flex',
    homePadding: 'home-padding',
  };

  function render() {
    const containerDiv = document.createElement('div');
    const scheduleContainter = document.createElement('div');
    containerDiv.classList.add(_styleClasses.homePadding);
    scheduleContainter.classList.add(_styleClasses.homeFlex);

    /** Different schedule entries */
    const entries = ['Weekdays', 'Saturday', 'Sunday'];

    entries.forEach((day) => scheduleContainter.appendChild(scheduleEntryComponent(day).render()));
    containerDiv.appendChild(scheduleContainter);

    return SoftShadowed(Theme(containerDiv).apply('white')).wrap();
  }

  return { render };
}

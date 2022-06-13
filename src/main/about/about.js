import style from './about.css';
import scheduleEntryComponent from './entry/schedule_entry';
import { SoftShadowed } from './../../generic/shadowed/shadowed';
import { Theme } from './../../generic/theme/theme';
import contactForm from './contact/contact';

export default function about() {
  const _styleClasses = {
    homeFlex: 'home-flex',
    homePadding: 'home-padding',
    scheduleFlex: 'schedule-container-flex',
    borderRadius: 'home-radius-15',
  };

  function _renderSchedule() {
    const scheduleContainter = document.createElement('div');
    scheduleContainter.classList.add(
      ...[_styleClasses.scheduleFlex, _styleClasses.homePadding, _styleClasses.borderRadius],
    );

    /** Different schedule entries */
    const entries = ['Weekdays', 'Saturday', 'Sunday'];

    entries.forEach((day) => scheduleContainter.appendChild(scheduleEntryComponent(day).render()));
    return Theme(SoftShadowed(scheduleContainter).wrap()).apply('white');
  }

  /** Renders the element that contains both the schedule and ways of contacting the restaurant as a flex-container with direction of `column`. */
  function render() {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add(_styleClasses.homeFlex);

    const schedule = _renderSchedule();

    const contact = contactForm().render();
    contact.classList.add(_styleClasses.borderRadius);

    containerDiv.appendChild(contact);
    containerDiv.appendChild(schedule);

    return containerDiv;
  }

  return { render };
}

import scheduleModel from './model/schedule_entry_model';

import { Theme } from '../../../generic/theme/theme';

import mainStyle from './../../main.css';
import style from './schedule_entry.css';

const scheduleEntryComponent = function (day) {
  /** Styles used throughout the module */
  const _styles = {
    schFlex: 'schedule-flex',
    breakHours: 'break-hours-entry',
    openHours: 'opening-hours-entry',
    entryGrid: 'entry-grid',
    softShadow: 'soft-shadow',
    largeFont: 'font-1_5rem',
  };

  function _workingHoursElement(day) {
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add(...[_styles.schFlex, _styles.openHours]);
    hoursDiv.innerHTML = `<span>Opening Hours: </span> <span>${scheduleModel.getOpeningHours(
      day,
    )}</span>`;
    return hoursDiv;
  }

  function _breakHoursElement(day) {
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add(...[_styles.schFlex, _styles.breakHours]);
    hoursDiv.innerHTML = `<span>Break: </span> <span>${scheduleModel.getBreakHours(day)}</span>`;
    return hoursDiv;
  }

  function render() {
    const scheduleEntryContainer = document.createElement('article');
    scheduleEntryContainer.classList.add(...[_styles.entryGrid, _styles.theme, _styles.largeFont]);

    const pTitle = document.createElement('p');
    pTitle.textContent = day.toUpperCase();
    pTitle.classList.add('weekday-entry');
    scheduleEntryContainer.appendChild(pTitle);

    scheduleEntryContainer.appendChild(_workingHoursElement(day));

    const breakHours = scheduleModel.getBreakHours(day);
    if (breakHours) {
      scheduleEntryContainer.appendChild(_breakHoursElement(day));
    }

    return Theme(scheduleEntryContainer).apply('white');
  }

  return { render };
};

export default scheduleEntryComponent;

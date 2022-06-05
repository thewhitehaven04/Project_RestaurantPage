/** Returns schedule for weekdays and weekends */
const scheduleModel = (function () {
  const _model = {
    weekdays: {
      openingHours: '10:00 - 23:00',
      breakHours: '15:00 - 15:30',
    },
    saturday: {
      openingHours: '12:00 - 21:00',
      breakHours: null,
    },
    sunday: {
      openingHours: '12:00 - 21:00',
      breakHours: null,
    },
  };

  function getOpeningHours(day) {
    return _model[day.toLowerCase()].openingHours;
  }

  function getBreakHours(day) {
    return _model[day.toLowerCase()].breakHours;
  }

  return {
    getBreakHours: getBreakHours,
    getOpeningHours: getOpeningHours,
  };
})();

export default scheduleModel;

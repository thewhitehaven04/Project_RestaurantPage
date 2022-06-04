export default function scheduleEntry(modelEntry) {
  const scheduleContainer = document.createElement('div');
  scheduleContainer.classList.add('flex-entry');

  for (entry in modelEntry) {
    if (modelEntry(entry)) {
      const span = document.createElement('span');
      span.textContent = modelEntry(entry);
      scheduleContainer.appendChild(span);
    }
  }

  return scheduleContainer;
}

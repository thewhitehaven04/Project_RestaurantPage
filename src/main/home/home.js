import { entry } from '../../../webpack.config';
import { scheduleModel } from './model/schedule_model';
import scheduleEntry from './schedule_entry';

export default function home() {
  const containerDiv = document.createElement('div');
  for (entry of scheduleModel) {
    containerDiv.appendChild(scheduleEntry(entry));
  }
  return containerDiv;
}

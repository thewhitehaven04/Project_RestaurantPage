import style from './contact.css';
import { SoftShadowed } from '../../../generic/shadowed/shadowed';
import { Theme } from '../../../generic/theme/theme';
import { model } from './model';

export default function contactForm() {
  const _styleClasses = {
    flex: 'contact-flex-rows',
    articleFlex: 'how-to-contact-flex',
    message: 'contact-message',
    title: 'contact-title',
  };

  /** Renders the contact form message with additional padding on top */
  function _renderContactMessage() {
    const divMessage = document.createElement('span');
    divMessage.innerHTML =
      'We work for you 7 days a week, 365 days a year so that you have a place to enjoy quality food and have a good time. ' +
      'If you have any questions or wishes, please contact our administrator.';
    divMessage.classList.add(_styleClasses.message);
    return divMessage;
  }

  function renderContactProperty(howToContact) {
    const article = document.createElement('article');
    article.classList.add(_styleClasses.articleFlex);

    const spanTitle = document.createElement('span');
    spanTitle.textContent = howToContact.displayName;
    spanTitle.classList.add(_styleClasses.title);

    const spanValue = document.createElement('span');
    spanValue.textContent = howToContact.value;

    article.appendChild(spanTitle);
    article.appendChild(spanValue);
    return article;
  }

  /** Renders all the ways of contacting the restaurant. These are put into the flex container with 
   * the flex-direction of rows */
  function _renderContactForm() {
    const frag = document.createDocumentFragment();
    model.forEach((modelEntry) => frag.appendChild(renderContactProperty(modelEntry)));
    return frag;
  }

  function render() {
    const div = document.createElement('div');

    div.classList.add(_styleClasses.flex);

    div.appendChild(_renderContactForm());
    div.appendChild(_renderContactMessage());

    return Theme(SoftShadowed(div).wrap()).apply('white');
  }

  return { render };
}

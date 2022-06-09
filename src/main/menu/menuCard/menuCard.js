import { SoftShadowed, softShadowed } from '../../../generic/shadowed/shadowed';
import style from './menuCard.css';
import { Theme } from '../../../generic/theme/theme';

export default function menuCard(modelData) {
  /** The classes to apply to card elements */
  const _styleClasses = {
    gridCard: 'grid-menu-card',
    cardTitle: 'card-title',
    imageStyle: 'image-round',
    menuCardStyle: 'menu-card-style',
  };

  /** The card elements respective grid areas. */
  const _gridAreas = {
    description: 'description',
    price: 'price',
    weight: 'weight',
    image: 'image',
  };

  function _image() {
    const imgWidth = 300;
    const imgHeight = 300;
    const img = new Image(imgWidth, imgHeight);

    img.src = modelData.imageUrl;
    img.classList.add(_styleClasses.imageStyle);
    img.style.gridArea = _gridAreas.image;

    return img;
  }

  function _cardTitle(title) {
    const spanTitle = document.createElement('span');
    spanTitle.classList.add(_styleClasses.cardTitle);
    spanTitle.textContent = title;
    return spanTitle;
  }

  function _itemWeight(weight) {
    const frag = document.createDocumentFragment();
    const container = document.createElement('div');
    const spanKey = document.createElement('span');
    const spanValue = document.createElement('span');

    spanKey.textContent = 'Weight: ';
    spanValue.textContent = `${weight} kg.`;

    container.appendChild(spanKey);
    container.appendChild(spanValue);

    frag.appendChild(container);
    return frag;
  }

  function _itemProperty(propertyName) {
    const spanProperty = document.createElement('span');
    spanProperty.textContent = modelData[propertyName];
    spanProperty.style.gridArea = _gridAreas[propertyName];
    return spanProperty;
  }

  function _itemPrice(price) {
    const frag = document.createDocumentFragment();
    const span = document.createElement('span');

    span.textContent = `Price: ${price}$`;
    frag.appendChild(span);
    return frag;
  }

  function render() {
    const article = document.createElement('article');
    article.classList.add(...[_styleClasses.gridCard, _styleClasses.menuCardStyle]);

    article.appendChild(_cardTitle(modelData.name));
    article.appendChild(_image());
    article.appendChild(_itemProperty('description'));
    article.appendChild(_itemPrice(modelData.price));
    article.appendChild(_itemWeight(modelData.weightKilos));

    return SoftShadowed(Theme(article).apply('green')).wrap();
  }
  return { render };
}

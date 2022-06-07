import menuItem from './model';
import fineDeClaire from './../../images/fine-de-claire-n4.jpg';
import maldonNo3 from './../../images/maldon_rock_oysters.jpg';
import fruitsDeMer from './../../images/fruits-de-mer.jpg';
import utahBeachN3 from './../../images/utah-n3.jpg';
import lobsterSoup from './../../images/lobsterSoup.jpeg';

function menuRepository() {
  const _menuItems = [
    menuItem('Lobster Soup', null, 0.3, 13.5, lobsterSoup),
    menuItem(
      'Fine de Claire N2',
      'Marennes-Oléron, France - rich in water and with a balanced aroma. It is a superior quality oyster with a balanced salty and sweet flavour.',
      0.25,
      16.5,
      fineDeClaire,
    ),
    menuItem(
      'Maldon No. 3',
      'River Blackwater, Maldon, Essex, England – distinct fl avour and meatiness with a strong metallic finish which builds to a crescendo. 6 pcs.',
      0.2,
      19.5,
      './../images/maldon_rock_oysters.jpeg',
      maldonNo3,
    ),
    menuItem(
      'Fruits de Mer',
      'Combination of cold crustaceans and shellfish; mussels, brown shrimps (unpeeled), whelks, clams, crevettes, seafood salad, Devon brown crab and 3 oysters. Served on crushed ice',
      0.4,
      29.5,
      fruitsDeMer,
    ),
    menuItem(
      'Utah Beach N3',
      'Royal Bay of Grouville, Off the Normandy Coast. The Meat content is fabulous, and it has a gentleflavour of the sea. Very delicious indeed.',
      0.3,
      17.5,
      utahBeachN3,
    ),
  ];

  function getItems(page, pageSize) {
    return _menuItems.slice(parseInt(page), parseInt(page) + parseInt(pageSize));
  }

  return { getItems };
}

export default menuRepository;

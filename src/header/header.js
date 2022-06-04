import navBar from './navbar/navbar';

export default function header(navBarTabNames) {
  const headerElement = document.createElement('header');

  const navBar = navBar(navBarTabNames);


  return headerElement;
}

import style from './logo.css';
import logoImage from './fish_large.png';

export default function logo(width, height) {
  const logo = new Image(width, height);
  logo.src = logoImage;
  logo.alt = 'Blue fish as the logo image';
  return logo;
}

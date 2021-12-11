import './sass/main.scss';
import axios from "axios";

import pictureItem from './picture-item';

axios.get('/users')
  .then(res => {
    console.log(res.data);
  });
import { Notify } from 'notiflix/build/notiflix-notify-aio';







const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: "smooth",
});
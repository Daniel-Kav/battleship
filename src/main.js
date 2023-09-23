import download from './assets/download.jpg';

const title = document.createElement('h3');
title.textContent = 'Webpack made it easy to!!!!!!!!';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = download;
page.appendChild(img);

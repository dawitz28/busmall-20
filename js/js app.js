'use strict';

var allImages = [];
var tatalClicksAllowed = 25;
var selector = 0;
var renderImages = [];
var container = document.getElementById('container');
var imgOneEl = document.getElementById('img-one');
var imgTwoEl = document.getElementById('img-two');
var imgThreeEl = document.getElementById('img-three');
var imgList = document.getElementById('img-list');

// constructor
function Picture(name) {
  this.name = name;
  this.src = `img/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  allImages.push(this);
}

// Function
function getRandomImage() {
  return Math.floor(Math.random() * allImages.length);
}

//executable code
new Picture('bag');
new Picture('banana');
new Picture('bathroom');
new Picture('boots');
new Picture('breakfast');
new Picture('bubblegum');
new Picture('chair');
new Picture('cthulhu');
new Picture('dog-duck');
new Picture('dragon');
new Picture('pen');
new Picture('pet-sweep');
new Picture('scissors');
new Picture('shark');
new Picture('sweep');
new Picture('tauntaun');
new Picture('unicorn');
new Picture('usb');
new Picture('water-can');
new Picture('wine-glass');

// console.log(getRandomImageIndex());

function populateRenderImage() {
  while (renderImages.length > 3) {
    renderImages.shift();
  }
  while (renderImages.length < 6) {
    var newImage = getRandomImage();
    while (!renderImages.includes(newImage)) {
      renderImages.push(newImage);
    }

  }
  console.log(renderImages);
}

function renderPicture() {

  populateRenderImage();
  var pictureOne = renderImages[0];
  var pictureTwo = renderImages[1];
  var pictureThree = renderImages[2];

  imgOneEl.src = allImages[pictureOne].src;
  imgOneEl.alt = allImages[pictureOne].name;
  allImages[pictureOne].views++;

  imgTwoEl.src = allImages[pictureTwo].src;
  imgTwoEl.alt = allImages[pictureTwo].name;
  allImages[pictureTwo].views++;

  imgThreeEl.src = allImages[pictureThree].src;
  imgThreeEl.alt = allImages[pictureThree].name;
  allImages[pictureThree].views++;
}

function renderResults() {
  for (var i = 0; i < allImages.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${allImages[i].name} had ${allImages[i].votes} votes, and they saw ${allImages[i].views} times.`;
    imgList.appendChild(li);
  }
}
renderPicture();

// event handler
function clickHandler(event) {
  var clickedItem = event.target.alt;
  if (clickedItem) {
    console.log(clickedItem);
    selector++;

    for (var i = 0; i < allImages.length; i++) {
      if (clickedItem === allImages[i].name) {
        allImages[i].votes++;
      }
    }
    renderPicture();

    if (selector === tatalClicksAllowed) {
      container.removeEventListener('selector', clickHandler);

      renderResults();
    }
  } else {
    alert('please click image');
  }
}

// event listener
container.addEventListener('click', clickHandler);




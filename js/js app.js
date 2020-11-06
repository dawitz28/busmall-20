'use strict';

//

var allImages = [];
var tatalClicksAllowed = 25;
var renderImages = [];
var selector = 0;
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
  renderImages = [];
  while (renderImages.length > 0){
    renderImages.pop();
  }
  while (renderImages.length < 3){
    var newImage = getRandomImage();
    while (!renderImages.includes(newImage)){
      renderImages.push(newImage);
    }

  }
  console.log(renderImages);
}


var uniqueIndex = [];

// function getUniqueIndex() {
//     while (uniqueIndex.length < 6){
//         var random = randomNumber(allImages.length);
//         if (uniqueIndex.includes(random)){
//             uniqueIndex.push(random);
//         }
//     }
// }

// function removeThree() {
//     for (var i = 0; i < 3; i++){
//         uniqueIndex.shift();
//     }
// }

function renderPicture() {
  // var uniqueIndex = getRandomIndex()

  populateRenderImage();
  var pictureOne = renderImages[0];
  var pictureTwo = renderImages[1];
  var pictureThree = renderImages[2];

  // while (pictureTwo === pictureOne) {
  //     pictureTwo = getRandomImage();
  //     while (pictureThree === pictureTwo){
  //         pictureThree = getRandomImage();
  //     }
  // }

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
  }
}


// while(renderImages.length < 3){
//     var random = randomIndex(allImages.length);
//     while(renderImages.includes(random)){
//         random = reandomIndex();
//     }
//     // you know this "item" is unique
//     renderImages.push(random);
// }

// // function selectAllImages(){

//     while(pictureOne === pictureTwo){
//         pictureTwo = getRandomImageIndex();
//     }
// // }

// console.log(pictureOne, pictureTwo, pictureThree);
// event handler 




renderImages();





















// event listener 




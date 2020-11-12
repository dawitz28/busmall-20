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

var retrivedResults = localStorage.getItem('imageResults'); //look into this.
if (retrivedResults) {
  var parsedRetrievedResults = JSON.parse(retrivedResults);
  allImages = parsedRetrievedResults;
} else {
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
}

//executable code


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

var nameData = [];
var viewsData = [];
var votesData = [];

function getData() {
  for (var i = 0; i < allImages.length; i++) {
    nameData.push(allImages[i].name);
    viewsData.push(allImages[i].views);
    votesData.push(allImages[i].votes);
  }
}

function renderResults() {
  for (var i = 0; i < allImages.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${allImages[i].name} had ${allImages[i].votes} votes, and they saw ${allImages[i].views} times.`;
    imgList.appendChild(li);
  }
}
renderPicture();

function renderChart() {
  getData();
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameData, // names of array goes here.
      datasets: [{
        label: '# of Votes',
        data: votesData, // votes of array goes here.
        backgroundColor: 'rgb(22, 142, 161)',
        // 'rgba(255, 99, 132, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)'

        borderColor: 'rgb(27, 3, 179)',
        // 'rgba(255, 99, 132, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgb(169, 249, 21)'

        borderWidth: 1
      },
      {
        label: '# of Views',
        data: viewsData, // views of array goes here.
        backgroundColor: 'rgb(191, 63, 63)',
        // 'rgba(255, 99, 132, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)'

        borderColor: 'rgb(76, 25, 25)',
        // 'rgba(255, 99, 132, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)'

        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

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
      var strAllImages = JSON.stringify(allImages);
      localStorage.setItem('picture', strAllImages);
      renderChart();

      renderResults(); select
    }
  } else {
    alert('please click image');
  }
}

// event listener
container.addEventListener('click', clickHandler);


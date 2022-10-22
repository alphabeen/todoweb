const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg"
]

const todayImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement("img");

backgroundImage.src=`img/${todayImage}`;

document.body.appendChild(backgroundImage);
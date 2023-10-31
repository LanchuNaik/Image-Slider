const prevElem = document.querySelector('.js-prev-btn');
const nextElem = document.querySelector('.js-next-btn');
const imageContainerElem = document.querySelector('.image-container');
const imgsElem = document.querySelectorAll("img");
// console.log(imgsElem);

let timeOut;

let currentImg = 1;
nextElem.addEventListener('click', () => {
  currentImg++;
  clearTimeout(timeOut);
  updateImg();
});

prevElem.addEventListener('click', () => {
  currentImg--;
  clearTimeout(timeOut);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsElem.length) {
    currentImg = 1;
  }
  
  else if (currentImg < 1) {
    currentImg = imgsElem.length;
  }

  //translateX inside image-container the image will move to nxt image
  imageContainerElem.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeOut = setTimeout(() => {
    currentImg++
    updateImg();
  }, 3000)
}
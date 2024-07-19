import { images } from "./data";
;

const slider = document.querySelector('.slider') as HTMLElement
const leftBtn = document.querySelector('.left-btn') as HTMLElement
const middleBtn = document.querySelector('.middle-btn') as HTMLElement
const rightBtn = document.querySelector('.right-btn') as HTMLElement

const slides = images.map((item) => {
  return `<div class="slide">
   <img class="slide-img"  src=${item.url} alt="">
   <div class="slide-content">
    <p>slide ${item.id}</p>
    </div>
    </div>`
}).join('')

slider.innerHTML = slides;

const slideList: NodeListOf<HTMLElement> = document.querySelectorAll('.slide')

let counter: number = 0;

slideList.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
})


leftBtn.addEventListener('click', function () {
  counter = 0;
  carousel();
})

rightBtn.addEventListener('click', function () {
  counter = 2;
  carousel();
})


middleBtn.addEventListener('click', function () {
  counter = 1;
  carousel();
})
function carousel() {
  slideList.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
    slide.style.transition = `2s`;
  })
}


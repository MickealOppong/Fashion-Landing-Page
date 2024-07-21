import { images } from "./data";
;

const slider = document.querySelector('.slider') as HTMLElement
const leftBtn = document.querySelector('.left-btn') as HTMLElement
const middleBtn = document.querySelector('.middle-btn') as HTMLElement
const rightBtn = document.querySelector('.right-btn') as HTMLElement
const dotBtns: NodeListOf<HTMLDivElement> = document.querySelectorAll('.dot-btn')



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
  carousel(counter);
})

rightBtn.addEventListener('click', function () {
  counter = 2;
  carousel(counter);
})


middleBtn.addEventListener('click', function () {
  counter = 1;
  carousel(counter);
})

//determines which carousel is displayed
function carousel(position: number) {
  slideList.forEach((slide, index) => {
    slide.style.transform = `translateX(-${position * 100}%)`;
    slide.style.transition = `2s`;
  })
}


//highlights the selected button and remove the active from others
dotBtns.forEach((item) => {
  item.addEventListener('click', function (e) {
    if (!item.classList.contains('active-btn')) {
      item.classList.add('active-btn')
    }
    dotBtns.forEach((dotBtn) => {
      if (dotBtn !== item) {
        dotBtn.classList.remove('active-btn')
      }
    })
  })
})

//automatically change slides every 5 seconds
function changeSlide() {
  const interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * 3);
    carousel(randomIndex)
    dotBtns.forEach((btn, index) => {
      if (index === randomIndex) {
        btn.classList.add('active-btn')
      }
    })
    dotBtns.forEach((btn, index) => {
      if (index !== randomIndex) {
        btn.classList.remove('active-btn')
      }
    })
  }, 5000)

}

changeSlide();


///loading  trending products
const trendBtn = document.querySelector('.trend-btns') as HTMLDivElement


const children = [...trendBtn.children];

children.forEach((child) => {
  child.addEventListener('click', function (e) {
    const selectedBtn = e.target;
    if (selectedBtn instanceof Element) {
      selectedBtn.classList.add('active-trend')
      const nextElem = selectedBtn.nextElementSibling;
      nextElem?.classList.add('active-trend')
    }

  })

})




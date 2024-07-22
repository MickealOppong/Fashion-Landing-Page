import { deals, images, trendingProducts } from "./data";
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
const productsContainer = document.querySelector('.trending-products') as HTMLDivElement

//default products
let selectedItem: string = 'new arrival'
const children = [...trendBtn.children];

children.forEach((child) => {
  child.addEventListener('click', function (e) {

    const selectedBtn = e.target;

    if (selectedBtn instanceof Element) {

      selectedBtn.classList.add('active-trend')
      const nextElem = selectedBtn.nextElementSibling;
      nextElem?.classList.add('active-trend')
      if (selectedBtn.textContent) {
        selectedItem = selectedBtn.textContent;
        loadProducts(selectedItem)
      }
    }
    children.forEach((elem) => {
      if (elem !== child) {
        const firstELem = elem.firstElementChild;
        const nextElem = firstELem?.nextElementSibling;
        firstELem?.classList.remove('active-trend')
        nextElem?.classList.remove('active-trend')
      }
    })
  })

})

//function to load product based on which button is clicked
function loadProducts(category: string) {
  const trend = trendingProducts.find((product) => product.title === category);


  const trendProducts = trend?.products.map((product) => {
    const { name, img, price, colour, size } = product;
    return `<div class="product">
                   <img
                   src="${img}" alt="">
                   <div class="product-info">
                    <p>${name}</p>
                    <div class="product-size">
                    ${size.map((s, index) => {
      return `<span class="size ${index === 0 ? 'active-attribute' : ''}">${s}</span>`
    }).join('')}
                    </div>
                     <div class="product-colour">
                     ${colour.map((c, index) => {
      return `<span style="background-color:${c}" class="colour ${index === 0 ? 'active-attribute' : ''}"></span>`
    }).join('')}
                    </div>
                    <span class="price">&#36;${price}</span>
                   </div>

                   <div class="cart-btn-container">
                   <button class="cart-btn">add to cart</button>
                   </div>
                  </div>
                  `
  }).join('')


  if (trendProducts) {
    productsContainer.innerHTML = trendProducts;
  }


}

loadProducts(selectedItem)


// handle click event to change active product size and colour


productsContainer.addEventListener('click', function (e) {
  const elem = e.target;

  if (elem instanceof Element && elem.classList.contains('size')
    || elem instanceof Element && elem.classList.contains('colour')) {
    elem.classList.add('active-attribute')
    clearActiveClass(elem, 'size')
    clearActiveClass(elem, 'colour')
  }

})

function clearActiveClass(elem: Element, type: string) {
  const childElem = elem.parentElement?.querySelectorAll(`.${type}`)
  childElem?.forEach((item) => {
    if (item !== elem) {
      item.classList.remove('active-attribute')
    }
  })
}


//here you update the season banner
const seasonContainer = document.querySelector('.season') as HTMLDivElement;

const deal = deals.map((deal) => {
  const { title, text, img } = deal;
  return `<div class="deal">
  <div class="img-container">

  </div>
  <div class="deal-content">
<div class="title-container">
  <span></span>
  <p>${title}</p>
</div>
    <h2>${text}</h2>
      <div class="deal-btn-container">
      <button class="deals-btn">shop now</button>
      </div>
  </div>

  </div>`
}).join('')


if (deal !== undefined) {
  seasonContainer.innerHTML = deal;
}
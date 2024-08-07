import { Image } from "../types/image"
import { Footer, navMenu } from "../types/types"


export let navData: navMenu = [
  {
    title: 'home',
    url: 'https://mikeoppong.netlify.app',
    menu: [
      { links: [{ url: '', text: 'home 1' }, { url: '', text: 'home 2' }] }
    ]
  },
  {
    title: 'shop',
    url: 'https://mikeoppong.netlify.app',
    deal: [{
      title: 'basic collections',
      text: 'new arrivals',
      url: '',
      img: 'https://images.unsplash.com/photo-1484327973588-c31f829103fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'
    }],
    menu: [
      {
        title: 'product category',
        links: [{ url: '', text: 'cosmetics' }, { url: '', text: 'perfumes' }]
      },
      {
        title: 'brand category',
        links: [{ url: '', text: 'gucci' }, { url: '', text: 'enyce' }, { url: '', text: 'reserved' }]
      },
    ]
  },
  {
    title: 'blog',
    url: 'https://mikeoppong.netlify.app',
    menu: [
      { links: [{ url: '', text: 'blog 1' }, { url: '', text: 'blog 2' }] }
    ]
  },
  {
    title: 'about',
    url: 'https://mikeoppong.netlify.app'
  },
  {
    title: 'contact',
    url: 'https://mikeoppong.netlify.app'
  }
]


export const images: Image[] = [
  {
    id: 1,
    title: 'new trend',
    text: 'Summer sale stylist'.toUpperCase(),
    colour: '#B1D4E0',
    url: ''
  },
  {
    id: 2,
    title: 'all skin types',
    text: 'Powerful Skincare! </br>At one with the planet',
    colour: '#e2cfea',
    url: ''
  }
]


export const footer: Footer = [
  {
    title: 'company',
    links: [
      { text: 'about us', url: '' }, { text: 'careers', url: '' }, { text: 'affiliates', url: '' }, { text: 'blog', url: '' }, { text: 'contact us', url: '' }
    ]
  },
  {
    title: 'shop',
    links: [{ text: 'accessories', url: '' }, { text: 'men', url: '' }, { text: 'women', url: '' }, { text: 'clothes', url: '' }, { text: 'shop all', url: '' }]
  },
  {
    title: 'help',
    links: [{ text: 'customer service', url: '' }, { text: 'my account', url: '' }, { text: 'find a store', url: '' }, { text: 'legal & privacy', url: '' }, { text: 'contact', url: '' }]
  }
]

export const trendingProducts = [
  {
    title: 'new arrival',
    products: [
      {
        name: 'Nike Air Force 1',
        price: 310.99,
        size: ['32', '43', '44', '46'],
        img: 'https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/73-home_default/hummingbird-vector-graphics.jpg',
        colour: ['#F00000', "#00FF00", "#9AFB34", '#173B45', '#B43F3F', '#FF8225']
      },
      {
        name: 'Dress Neck Casual Short Dresses',
        price: 10,
        size: ['s', 'm', 'l', 'xl'],
        img: 'https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/33-home_default/brown-bear-printed-sweater.jpg',
        colour: ['#F00000', "#00FF00"]
      },
      {
        name: 'Summer Dress Women Short Sleeve',
        price: 110,
        size: ['s', 'm', 'l'],
        img: 'https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/35-home_default/the-best-is-yet-to-come-framed-poster.jpg',
        colour: ["#9AFB34", '#173B45', '#B43F3F', '#FF8225']
      },
      {
        name: 'Cropped Faux Leather Jacket',
        price: 300,
        size: ['s', 'm', 'l'],
        img: 'https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/65-home_default/mountain-fox-vector-graphics.jpg',
        colour: ['#B43F3F', '#FF8225']
      },
    ]
  },

  {
    title: 'best sellers',
    products: [
      {
        name: 'jeans',
        price: 10,
        size: ['s', 'm', 'l'],
        img: 'https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/60-home_default/brown-bear-cushion.jpg',
        colour: []
      },
      {
        name: 'Neck Casual Short Zessi Dressesgh',
        price: 10,
        size: ['s', 'm', 'l'],
        img: 'https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/57-home_default/mountain-fox-cushion.jpg',
        colour: []
      },
      {
        name: 'Nike Air Force 1 07',
        price: 600,
        size: ['38', '39', '40', '41', '42'],
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/buty-meskie-air-force-1-07-CFVMS0.png',
        colour: ['#FFFFFF']
      },
      {
        name: 'NIKE Jordan 1 MID',
        price: 345,
        size: ['38', '39', '40', '41', '42'],
        img: 'https://storamore.pl/images/sh193/20000-21000/Buty-NIKE-Dunk-Low-Czarno-biale-Panda_%5B20375%5D_780.jpg',
        colour: ['#173B45', '#B43F3F', '#FF8225']
      },
    ]
  },
  {
    title: 'top rating',
    products: [
      {
        name: 'Women’s Turtleneck Tie Dress',
        price: 100,
        size: ['s', 'm', 'l'],
        img: 'https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/50-home_default/mug-the-adventure-begins.jpg',
        colour: []
      },
      {
        name: '',
        price: 59,
        size: ['s', 'm', 'l'],
        img: 'https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/83-home_default/mountain-fox-notebook.jpg',
        colour: ['#173B45', '#B43F3F', '#FF8225']
      },
      {
        name: 'Women’s High-Waist Jean',
        price: 120,
        size: ['s', 'm', 'l'],
        img: 'https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/61-home_default/hummingbird-cushion.jpg',
        colour: []
      },
      {
        name: 'Compact Circular Saw',
        price: 10,
        size: ['s', 'm', 'l'],
        img: 'https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/79-home_default/pack-mug-framed-poster.jpg',
        colour: ['#B43F3F', '#FF8225']
      },
    ]
  }
]

export const deals = [
  {
    title: 'deal of the week',
    text: 'spring collection',
    img: "../public/assets/spring-sale.webp"
  }
]
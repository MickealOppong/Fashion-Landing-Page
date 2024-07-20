import { Image } from "../types/image"
import { Footer, navMenu } from "../types/types"
export let navData: navMenu = [
  {
    title: 'home',
    url: 'https://www.google.com',
    menu: ['home 1', 'home 3', 'home 3']
  },
  {
    title: 'shop',
    url: '',
    menu: ['product style 1', 'product style 3', 'product style 3',
      'product style 4', 'product style 5', 'product style 6'
    ]
  },
  {
    title: 'blog',
    url: '',
    menu: ['blog list 1', 'blog list 3']
  },
  {
    title: 'about',
    url: ''
  },
  {
    title: 'contact',
    url: ''
  }
]


export const images: Image[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1720811118401-0c947249988c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1721146609543-491c1ec04240?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1720983415059-43ec4007cf97?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
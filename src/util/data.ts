import { Image } from "../types/image"
import { navMenu } from "../types/types"
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
    url: 'https://plus.unsplash.com/premium_photo-1719850361442-dd4203f47fb9?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1721146609543-491c1ec04240?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1721163202587-f1f7ba17c0cd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]
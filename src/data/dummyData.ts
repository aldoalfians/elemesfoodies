import { ProductCategory, Trending } from './types'

export const listProductCategories: ProductCategory[] = [
  {
    bgColor: 'bg-secondary-green',
    iconUrl: '/assets/icons/cake.svg',
    itemLength: 33,
    title: 'Cupcakes',
  },
  {
    bgColor: 'bg-secondary-ocean',
    iconUrl: '/assets/icons/pizza.svg',
    itemLength: 25,
    title: 'Pizza',
  },
  {
    bgColor: 'bg-secondary-green',
    iconUrl: '/assets/icons/kebab.svg',
    itemLength: 12,
    title: 'Kebab',
  },
  {
    bgColor: 'bg-secondary-violet',
    iconUrl: '/assets/icons/salmon.svg',
    itemLength: 22,
    title: 'Salmon',
  },
  {
    bgColor: 'bg-secondary-moss',
    iconUrl: '/assets/icons/doughnut.svg',
    itemLength: 11,
    title: 'Doughnut',
  },
]

// Trending
export const listProductTrending: Trending[] = [
  {
    bgColor: 'bg-secondary-green',
    category: 'Pizza',
    photoUrl: '/assets/trending/food-8.png',
    rating: 4,
    title: 'Pizza Peperoni',
  },
  {
    bgColor: 'bg-secondary-green',
    category: 'Pizza',
    photoUrl: '/assets/trending/food-1.png',
    rating: 3,
    title: 'Pizza Meat',
  },
  {
    bgColor: 'bg-secondary-green',
    category: 'Kebab',
    photoUrl: '/assets/trending/food-2.png',
    rating: 5,
    title: 'Doner Kebab',
  },
  {
    bgColor: 'bg-secondary-violet',
    category: 'Salmon',
    photoUrl: '/assets/trending/food-3.png',
    rating: 4.5,
    title: 'Salmon Roll',
  },
  {
    bgColor: 'bg-secondary-blue',
    category: 'Cupcake',
    photoUrl: '/assets/trending/food-4.png',
    rating: 4,
    title: 'Cupcake Choco',
  },
  {
    bgColor: 'bg-secondary-violet',
    category: 'Doughnut',
    photoUrl: '/assets/trending/food-5.png',
    rating: 5,
    title: 'Doughnut milk',
  },
  {
    bgColor: 'bg-secondary-moss',
    category: 'Doughnut',
    photoUrl: '/assets/trending/food-6.png',
    rating: 4,
    title: 'Doughnut Unicorn',
  },
  {
    bgColor: 'bg-secondary-ocean',
    category: 'Kebab',
    photoUrl: '/assets/trending/food-7.png',
    rating: 4,
    title: 'Kathi Kebab',
  },
]

export type Trending = {
  photoUrl: string
  title: string
  rating?: number
  category: 'Pizza' | 'Kebab' | 'Salmon' | 'Cupcake' | 'Doughnut'
  bgColor: string
}

export type ProductCategory = {
  iconUrl: string
  title: string
  itemLength: number
  bgColor: string
}

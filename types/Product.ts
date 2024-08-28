import { Category } from '~/types/ProductCategoryEnum'

interface Rating {
    rate:  number
    count: number
}

interface Product {
    id: number
    title: string
    price: number
    description: string
    category: Category
    image: string
    rating: Rating
}

export type { Product }

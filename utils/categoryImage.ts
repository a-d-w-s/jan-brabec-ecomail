import { Category } from '~/types/ProductCategoryEnum'

export default function categoryImage(text: string): string {
    switch (text) {
        case Category.Jewelery:
            return '/images/category-01.webp'
        case Category.WomenSClothing:
            return '/images/category-02.webp'
        case Category.Electronics:
            return '/images/category-03.webp'
        case Category.MenSClothing:
            return '/images/category-04.webp'
        default:
            return ''
    }
}

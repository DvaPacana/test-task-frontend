import type { Product } from '@/types/products.type'

export class ProductModel implements Product {
  id: number
  title: string
  description?: string
  availabilityStatus?: string
  price: number
  rating?: number

  constructor(data: Product) {
    this.id = data.id
    this.title = data.title || ''
    this.description = data.description ?? ''
    this.price = data.price ?? 0
    this.rating = data.rating ?? 0
    this.availabilityStatus = data.availabilityStatus ?? ''
  }

  formattedPrice(locale = 'ru-RU', currency = 'RUB') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(this.price)
  }
}

export default ProductModel

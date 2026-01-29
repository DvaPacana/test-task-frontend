import type { Products } from '@/types/products.type'

import { ProductModel } from './product.model'

export class ProductsModel {
  items: ProductModel[]

  constructor(items: Products = []) {
    this.items = items.map((i) => new ProductModel(i))
  }

  findById(id: number) {
    return this.items.find((p) => p.id === id) ?? null
  }

  averageRating() {
    const ratings = this.items.map((p) => p.rating ?? 0)
    if (!ratings.length) return 0
    return ratings.reduce((a, b) => a + b, 0) / ratings.length
  }
}

export default ProductsModel

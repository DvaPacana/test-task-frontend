export interface Product {
  id: number
  name?: string
  title?: string
  description?: string
  price: number
  rating?: number
  category?: string
  discountPercentage?: number
  stock?: number
  tags?: string[]
  brand?: string
  sku?: string
  weight?: number
  dimensions?: { width?: number; height?: number; depth?: number }
  warrantyInformation?: string
  shippingInformation?: string
  availabilityStatus?: string
  reviews?: unknown[]
  returnPolicy?: string
  minimumOrderQuantity?: number
  meta?: Record<string, unknown>
  images?: string[]
  thumbnail?: string
}

export type Products = Product[]

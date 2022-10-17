export type onProductClick = (product: IProduct) => any

export interface IProduct {
  id: number,
  name: string
}

export interface IProductsList<Products = IProduct[]> {
  productsUser: Products,
  productsShow: Products
}

export interface IResponse {
  data: IProductsList
}

export const getProducts = async () => {
  const request = await fetch('./data.json')
  const result = await request.json()
  return result as IResponse
}
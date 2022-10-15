import type { ProductInterface } from "@/interface/product.interface"

class ProductModel implements ProductInterface {
	id: number
	name: string

	constructor (data: ProductInterface) {
		this.id = data.id
		this.name = data.name
	}
}

export {
	ProductModel
}

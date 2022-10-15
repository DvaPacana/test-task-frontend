import { ProductClient } from "@/client/product.client"
import type { ProductInterface } from "@/interface/product.interface"

export default class ProductService {
	static async getUsersStuff (): Promise<ProductInterface[]> {
		return await ProductClient.getUsersStuff()
	}

	static async getThingsToChoose (): Promise<ProductInterface[]> {
		return await ProductClient.getThingsToChoose()
	}
}


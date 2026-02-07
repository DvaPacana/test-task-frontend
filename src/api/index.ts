import type { Response } from "../shared/types/api"
import type { Item } from "../shared/types/item"
import { vendorItems, userItems } from "../data"

export default {
  getVendorItems(): Response<Item[]> {
    return Promise.resolve(vendorItems)
  },

  getUserItems(): Response<Item[]> {
    return Promise.resolve(userItems)
  }
}
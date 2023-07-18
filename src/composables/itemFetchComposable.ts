import type { ItemInterface } from '~/interfaces/item.interface'

export async function fetchItems(url: string, items: Ref<ItemInterface[]>) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(
      `Failed to fetch items: ${response.status} ${response.statusText}`
    )
  }

  items.value = await response.json()
}

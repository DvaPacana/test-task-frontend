import { mount } from '@vue/test-utils'
import ItemsGrid from './ItemsGrid.vue'
import ItemCard from './ItemCard.vue'
import type { Item } from '../data/items'

const items: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
]

describe('ItemsGrid', () => {
  it('рендерит карточки для всех элементов', () => {
    const wrapper = mount(ItemsGrid, {
      props: {
        items,
        isItemSelected: () => false,
      },
    })

    const cards = wrapper.findAllComponents(ItemCard)
    expect(cards).toHaveLength(items.length)
    expect(cards[0].text()).toContain('Item 1')
  })

  it('передает состояния active и disabled в ItemCard', () => {
    const wrapper = mount(ItemsGrid, {
      props: {
        items,
        isItemSelected: (item) => item.id === 2,
        isItemDisabled: (item) => item.id === 3,
      },
    })

    const cards = wrapper.findAllComponents(ItemCard)
    expect(cards[1].props('isActive')).toBe(true)
    expect(cards[2].props('isDisabled')).toBe(true)
  })

  it('эмитит itemClick с выбранным элементом', async () => {
    const wrapper = mount(ItemsGrid, {
      props: {
        items,
        isItemSelected: () => false,
      },
    })

    const firstCard = wrapper.findComponent(ItemCard)
    await firstCard.trigger('click')

    expect(wrapper.emitted('itemClick')).toBeTruthy()
    expect(wrapper.emitted('itemClick')?.[0]).toEqual([items[0]])
  })
})

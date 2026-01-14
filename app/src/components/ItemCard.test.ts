import { mount } from '@vue/test-utils'
import ItemCard from './ItemCard.vue'
import type { Item } from '../data/items'

const createItem = (overrides: Partial<Item> = {}): Item => ({
  id: 1,
  name: 'Shoes 1',
  ...overrides,
})

describe('ItemCard', () => {
  it('рендерит название элемента', () => {
    const item = createItem({ name: 'Custom name' })
    const wrapper = mount(ItemCard, {
      props: { item, isActive: false },
    })

    expect(wrapper.text()).toContain('Custom name')
  })

  it('добавляет класс активного состояния', () => {
    const item = createItem()
    const wrapper = mount(ItemCard, {
      props: { item, isActive: true },
    })

    expect(wrapper.classes()).toContain('item-card--active')
    expect(wrapper.attributes('aria-pressed')).toBe('true')
  })

  it('эмитит событие click с элементом', async () => {
    const item = createItem({ id: 42, name: 'Clicked item' })
    const wrapper = mount(ItemCard, {
      props: { item, isActive: false },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')?.[0]).toEqual([item])
  })
})

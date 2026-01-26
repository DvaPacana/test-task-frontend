import { shallowMount } from '@vue/test-utils'
import ItemCard from '@/components/ItemCard.vue'

describe('ItemCard', () => {
  const item = { id: 1, name: 'Shoes 1' }

  it('отображает имя вещи', () => {
    const wrapper = shallowMount(ItemCard, {
      propsData: { item },
    })

    expect(wrapper.text()).toBe('Shoes 1')
  })

  it('не имеет класс selected по умолчанию', () => {
    const wrapper = shallowMount(ItemCard, {
      propsData: { item },
    })

    expect(wrapper.classes()).not.toContain('selected')
  })

  it('имеет класс selected когда isSelected=true', () => {
    const wrapper = shallowMount(ItemCard, {
      propsData: { item, isSelected: true },
    })

    expect(wrapper.classes()).toContain('selected')
  })

  it('эмитит click при нажатии', async () => {
    const wrapper = shallowMount(ItemCard, {
      propsData: { item },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})

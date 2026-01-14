import { mount } from '@vue/test-utils'
import SelectedArea from './SelectedArea.vue'
import type { Item } from '../data/items'

const createItems = (count: number): Item[] =>
  Array.from({ length: count }, (_, idx) => ({
    id: idx + 1,
    name: `Item ${idx + 1}`,
  }))

describe('SelectedArea', () => {
  it('показывает плейсхолдер, когда список пуст', () => {
    const wrapper = mount(SelectedArea, {
      props: { items: [] },
    })

    expect(wrapper.text()).toContain('Пока ничего не выбрано')
  })

  it('рендерит чипы для переданных элементов', () => {
    const items = createItems(3)
    const wrapper = mount(SelectedArea, {
      props: { items },
    })

    expect(wrapper.findAllComponents({ name: 'Chip' })).toHaveLength(3)
    expect(wrapper.text()).toContain('Item 1')
    expect(wrapper.text()).toContain('Item 3')
  })

  it('использует кастомный текст пустого состояния', () => {
    const wrapper = mount(SelectedArea, {
      props: {
        items: [],
        emptyText: 'Не выбрано',
      },
    })

    expect(wrapper.text()).toContain('Не выбрано')
  })
})

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ItemCard from './ItemCard.vue'

describe('ItemCard', () => {
  it('renders the name correctly', () => {
    const wrapper = mount(ItemCard, {
      props: { name: 'Test Item' },
    })
    expect(wrapper.text()).toBe('Test Item')
  })

  it('has selected class when selected prop is true', () => {
    const wrapper = mount(ItemCard, {
      props: { name: 'Test', selected: true },
    })
    expect(wrapper.classes()).toContain('selected')
  })

  it('does not have selected class when selected prop is false', () => {
    const wrapper = mount(ItemCard, {
      props: { name: 'Test', selected: false },
    })
    expect(wrapper.classes()).not.toContain('selected')
  })

  it('has disabled class when disabled prop is true', () => {
    const wrapper = mount(ItemCard, {
      props: { name: 'Test', disabled: true },
    })
    expect(wrapper.classes()).toContain('disabled')
  })

  it('emits click event when clicked and not disabled', async () => {
    const wrapper = mount(ItemCard, {
      props: { name: 'Test', disabled: false },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click event when clicked and disabled', async () => {
    const wrapper = mount(ItemCard, {
      props: { name: 'Test', disabled: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('has correct default props', () => {
    const wrapper = mount(ItemCard, {
      props: { name: 'Test' },
    })
    expect(wrapper.classes()).toContain('selected')
    expect(wrapper.classes()).not.toContain('disabled')
  })
})
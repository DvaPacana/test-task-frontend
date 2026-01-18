import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App', () => {
  it('renders user items grid', () => {
    const wrapper = mount(App)
    const userItems = wrapper.findAll('.items-panel .item-card')
    expect(userItems.length).toBe(16) // 8 user items + 8 available items
  })

  it('displays counter with initial value 0/6', () => {
    const wrapper = mount(App)
    expect(wrapper.find('.counter').text()).toBe('selected: 0 / 6')
  })

  it('selects user item on click', async () => {
    const wrapper = mount(App)
    const userItemsPanel = wrapper.findAll('.items-panel')[0]
    const firstItem = userItemsPanel!.find('.item-card')

    await firstItem.trigger('click')

    expect(wrapper.find('.counter').text()).toBe('selected: 1 / 6')
    expect(wrapper.find('.selected-items-grid .item-card').exists()).toBe(true)
  })

  it('deselects user item on second click', async () => {
    const wrapper = mount(App)
    const userItemsPanel = wrapper.findAll('.items-panel')[0]
    const firstItem = userItemsPanel!.find('.item-card')

    await firstItem.trigger('click')
    expect(wrapper.find('.counter').text()).toBe('selected: 1 / 6')

    await firstItem.trigger('click')
    expect(wrapper.find('.counter').text()).toBe('selected: 0 / 6')
  })

  it('limits user items selection to 6', async () => {
    const wrapper = mount(App)
    const userItemsPanel = wrapper.findAll('.items-panel')[0]
    const items = userItemsPanel!.findAll('.item-card')

    // Select 6 items
    for (let i = 0; i < 6; i++) {
      await items[i]!.trigger('click')
    }
    expect(wrapper.find('.counter').text()).toBe('selected: 6 / 6')

    // Try to select 7th item
    await items[6]!.trigger('click')
    expect(wrapper.find('.counter').text()).toBe('selected: 6 / 6')
  })

  it('disables unselected items when max is reached', async () => {
    const wrapper = mount(App)
    const userItemsPanel = wrapper.findAll('.items-panel')[0]
    const items = userItemsPanel!.findAll('.item-card')

    // Select 6 items
    for (let i = 0; i < 6; i++) {
      await items[i]!.trigger('click')
    }

    // Check that remaining items are disabled
    expect(items[6]!.classes()).toContain('disabled')
    expect(items[7]!.classes()).toContain('disabled')
  })

  it('shows placeholder when no available item is selected', () => {
    const wrapper = mount(App)
    expect(wrapper.find('.placeholder').text()).toBe('SELECTED ITEM')
  })

  it('selects available item on click', async () => {
    const wrapper = mount(App)
    const availableItemsPanel = wrapper.findAll('.items-panel')[1]
    const firstItem = availableItemsPanel!.find('.item-card')

    await firstItem.trigger('click')

    expect(wrapper.find('.placeholder').exists()).toBe(false)
    expect(wrapper.find('.selected-single-item .item-card').exists()).toBe(true)
  })

  it('replaces available item selection on new click', async () => {
    const wrapper = mount(App)
    const availableItemsPanel = wrapper.findAll('.items-panel')[1]
    const items = availableItemsPanel!.findAll('.item-card')

    await items[0]!.trigger('click')
    expect(wrapper.find('.selected-single-item .item-card').text()).toBe(
      'Jacket 1'
    )

    await items[1]!.trigger('click')
    expect(wrapper.find('.selected-single-item .item-card').text()).toBe(
      'Jacket 2'
    )
  })

  it('deselects available item on second click', async () => {
    const wrapper = mount(App)
    const availableItemsPanel = wrapper.findAll('.items-panel')[1]
    const firstItem = availableItemsPanel!.find('.item-card')

    await firstItem.trigger('click')
    expect(wrapper.find('.selected-single-item').exists()).toBe(true)

    await firstItem.trigger('click')
    expect(wrapper.find('.placeholder').exists()).toBe(true)
  })

  it('displays selected user items in order', async () => {
    const wrapper = mount(App)
    const userItemsPanel = wrapper.findAll('.items-panel')[0]
    const items = userItemsPanel!.findAll('.item-card')

    await items[2]!.trigger('click') // Shoes 3
    await items[0]!.trigger('click') // Shoes 1

    const selectedItems = wrapper.findAll('.selected-items-grid .item-card')
    expect(selectedItems[0]!.text()).toBe('Shoes 3')
    expect(selectedItems[1]!.text()).toBe('Shoes 1')
  })
})

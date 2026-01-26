import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import ItemCard from '@/components/ItemCard.vue'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(App)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('отображает 8 вещей пользователя и 8 вещей из каталога', () => {
    const cards = wrapper.findAllComponents(ItemCard)
    expect(cards).toHaveLength(16)
  })

  it('показывает счётчик selected: 0 / 6', () => {
    expect(wrapper.find('.selected-counter').text()).toBe('selected: 0 / 6')
  })

  it('показывает заглушку когда ничего не выбрано справа', () => {
    expect(wrapper.find('.single-selected.empty').text()).toBe('Ничего не выбрано')
  })

  describe('выбор вещей пользователя (левый блок)', () => {
    function getUserCards(wrapper) {
      const panels = wrapper.findAll('.items-list')
      return panels.at(0).findAllComponents(ItemCard)
    }

    it('добавляет вещь в выбранные при клике', async () => {
      const cards = getUserCards(wrapper)
      await cards.at(0).trigger('click')

      expect(wrapper.vm.selectedUserItems).toHaveLength(1)
      expect(wrapper.vm.selectedUserItems[0].name).toBe('Shoes 1')
    })

    it('убирает вещь из выбранных при повторном клике', async () => {
      const cards = getUserCards(wrapper)
      await cards.at(0).trigger('click')
      await cards.at(0).trigger('click')

      expect(wrapper.vm.selectedUserItems).toHaveLength(0)
    })

    it('сохраняет порядок выбора', async () => {
      const cards = getUserCards(wrapper)
      await cards.at(2).trigger('click')
      await cards.at(0).trigger('click')
      await cards.at(1).trigger('click')

      const names = wrapper.vm.selectedUserItems.map(i => i.name)
      expect(names).toEqual(['Shoes 3', 'Shoes 1', 'Shoes 2'])
    })

    it('не позволяет выбрать больше 6 вещей', async () => {
      const cards = getUserCards(wrapper)
      for (let i = 0; i < 8; i++) {
        await cards.at(i).trigger('click')
      }

      expect(wrapper.vm.selectedUserItems).toHaveLength(6)
    })

    it('обновляет счётчик при выборе', async () => {
      const cards = getUserCards(wrapper)
      await cards.at(0).trigger('click')
      await cards.at(1).trigger('click')

      expect(wrapper.find('.selected-counter').text()).toBe('selected: 2 / 6')
    })

    it('отображает выбранные вещи в верхнем левом блоке', async () => {
      const cards = getUserCards(wrapper)
      await cards.at(0).trigger('click')
      await cards.at(3).trigger('click')

      const selectedCards = wrapper.find('.selected-items-list').findAllComponents(ItemCard)
      expect(selectedCards).toHaveLength(2)
    })
  })

  describe('выбор вещи из каталога (правый блок)', () => {
    function getAvailableCards(wrapper) {
      const panels = wrapper.findAll('.items-list')
      return panels.at(1).findAllComponents(ItemCard)
    }

    it('выбирает одну вещь при клике', async () => {
      const cards = getAvailableCards(wrapper)
      await cards.at(0).trigger('click')

      expect(wrapper.vm.selectedAvailableItem.name).toBe('Jacket 1')
    })

    it('показывает имя выбранной вещи сверху справа', async () => {
      const cards = getAvailableCards(wrapper)
      await cards.at(0).trigger('click')

      expect(wrapper.find('.single-selected').text()).toBe('Jacket 1')
    })

    it('заменяет выбранную вещь при клике на другую', async () => {
      const cards = getAvailableCards(wrapper)
      await cards.at(0).trigger('click')
      await cards.at(2).trigger('click')

      expect(wrapper.vm.selectedAvailableItem.name).toBe('Jacket 3')
    })

    it('снимает выбор при повторном клике', async () => {
      const cards = getAvailableCards(wrapper)
      await cards.at(0).trigger('click')
      await cards.at(0).trigger('click')

      expect(wrapper.vm.selectedAvailableItem).toBeNull()
    })

    it('показывает заглушку после снятия выбора', async () => {
      const cards = getAvailableCards(wrapper)
      await cards.at(0).trigger('click')
      await cards.at(0).trigger('click')

      expect(wrapper.find('.single-selected.empty').exists()).toBe(true)
    })
  })
})

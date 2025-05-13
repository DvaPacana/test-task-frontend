import { MAX_SELECTED_CART_ITEMS } from '@/constants/limitations'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface IItem {
    id: number
    name: string
}

export const useItemsStore = defineStore('items', () => {
    const cartItems = ref<IItem[]>([
        {
            id: 1,
            name: 'Shoes 1'
        },
        {
            id: 2,
            name: 'Shoes 2'
        },
        {
            id: 3,
            name: 'Shoes 3'
        },
        {
            id: 4,
            name: 'Shoes 4'
        },
        {
            id: 5,
            name: 'T-shirt 1'
        },
        {
            id: 6,
            name: 'T-shirt 2'
        },
        {
            id: 7,
            name: 'T-shirt 3'
        },
        {
            id: 8,
            name: 'T-shirt 4'
        }
    ])

    const items = ref<IItem[]>([
        {
            id: 11,
            name: 'Jacket 1'
        },
        {
            id: 12,
            name: 'Jacket 2'
        },
        {
            id: 13,
            name: 'Jacket 3'
        },
        {
            id: 14,
            name: 'Jacket 4'
        },
        {
            id: 15,
            name: 'Hoodie 1'
        },
        {
            id: 16,
            name: 'Hoodie 2'
        },
        {
            id: 17,
            name: 'Hoodie 3'
        },
        {
            id: 18,
            name: 'Hoodie 4'
        }
    ])

    const selectedFromCart = ref<IItem[]>([])
    const selectedPreview = ref<IItem>()

    const normalizedCartItems = computed(() =>
        cartItems.value.filter(
            (item) => !selectedFromCart.value.find((cartItem) => cartItem.id === item.id)
        )
    )
    const normalizedItems = computed(() =>
        items.value.filter((item) => selectedPreview.value?.id !== item.id)
    )

    function selectFromCart(id: number) {
        if (selectedFromCart.value.length < MAX_SELECTED_CART_ITEMS) {
            selectedFromCart.value.push(cartItems.value.find((item) => item.id === id)!)
        } else {
            alert(`You've reached the limit of ${MAX_SELECTED_CART_ITEMS}`)
        }
    }

    function removeFromCartSelection(id: number) {
        selectedFromCart.value = selectedFromCart.value.filter((item) => item.id !== id)
    }

    function selectForPreview(id: number) {
        selectedPreview.value = items.value.find((item) => item.id === id)!
    }

    function removeFromPreview() {
        selectedPreview.value = undefined
    }

    return {
        items,
        cartItems,
        selectedFromCart,
        selectedPreview,

        normalizedCartItems,
        normalizedItems,

        selectFromCart,
        selectForPreview,
        removeFromCartSelection,
        removeFromPreview
    }
})

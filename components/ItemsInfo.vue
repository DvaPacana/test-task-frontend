<template>
  <main class="main">
    <h3 class="main__title main__title--page-title">
      User's personal & availiable items
    </h3>

    <section class="main__content content">

      <div class="content__row content__row--selected">
        <div class="content__row-item">
            <ItemsSelected
                :items="personal"
                :selItems="selUserItems"
            >
                User's items selected
            </ItemsSelected>
        </div>
        <div class="content__row-item">
            <ItemsSelected
                :items="available"
                :selItems="selAvailItems"
            >
                Available items selected
            </ItemsSelected>
        </div>
      </div>

      <div class="content__row content__row--collection">
        <div class="content__row-item">
            <Items
                :items="personal"
                :selItems="selUserItems"
                :maxSel="maxUserSel"
                @selectEvent="onSelected($event,'personal')"
            >
                <template v-slot:header>
                    User's items
                </template>
            </Items>
        </div>
        <div class="content__row-item">
            <Items
                :items="available"
                :selItems="selAvailItems"
                :maxSel="maxAvailSel"
                @selectEvent="onSelected($event,'available')"
            >
                <template v-slot:header>
                    Available items
                </template>
            </Items>
        </div>
      </div>

    </section>

  </main>
</template>

<script setup>
import { reactive} from 'vue'
import Items from "./Items.vue"
import ItemsSelected from "./ItemsSelected.vue"

// Data
const personal = [
    {
        "id": 1,
        "name": "Shoes 1"
    },
    {
        "id": 2,
        "name": "Shoes 2"
    },
    {
        "id": 3,
        "name": "Shoes 3"
    },
    {
        "id": 4,
        "name": "Shoes 4"
    },
    {
        "id": 5,
        "name": "T-shirt 1"
    },
    {
        "id": 6,
        "name": "T-shirt 2"
    },
    {
        "id": 7,
        "name": "T-shirt 3"
    },
    {
        "id": 8,
        "name": "T-shirt 4"
    }
]
const available = [
    {
        "id": 11,
        "name": "Jacket 1"
    },
    {
        "id": 12,
        "name": "Jacket 2"
    },
    {
        "id": 13,
        "name": "Jacket 3"
    },
    {
        "id": 14,
        "name": "Jacket 4"
    },
    {
        "id": 15,
        "name": "Hoodie 1"
    },
    {
        "id": 16,
        "name": "Hoodie 2"
    },
    {
        "id": 17,
        "name": "Hoodie 3"
    },
    {
        "id": 18,
        "name": "Hoodie 4"
    }
]

const selUserItems = reactive([])
const maxUserSel = 6
const selAvailItems = reactive([])
const maxAvailSel = 1

// methods
function onSelected(value, type) {
    let selArr = type == "personal" ? selUserItems : selAvailItems
    let maxSel = type == "personal" ? maxUserSel : maxAvailSel

    let ind = selArr.findIndex(id => id == value.id)
    if(ind >= 0) {
        selArr.splice(ind, 1)
    } else if (selArr.length < maxSel) {
        selArr.push(value.id)
    }
}

</script>
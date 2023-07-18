
<template>
  <div class="container">

    <div class="flex justify-content-between">
      <div class="card w-5">
        <Card class="mb-5">
          <template #title>
            Selected Items
          </template>
          <template #content>
            <div v-for="item in selectedItem1">
              {{ item.name }}
            </div>
          </template>
        </Card>
        <Card>
          <template #content>
            <MultiSelect v-model="selectedItem1" :options="items1" optionLabel="name" placeholder="Select" class="w-full md:w-20rem" />
          </template>
        </Card>
      </div>
      <div class="card w-5">
        <Card class="mb-5">
          <template #title>
            Selected Item
          </template>
          <template #content>
            {{ selectedItem2.name }}
          </template>
        </Card>
        <Card>
          <template #content>
            <Listbox v-model="selectedItem2" :options="items2" optionLabel="name" class="w-full md:w-14rem" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const selectedItem1 = ref([])
const selectedItem2 = ref()

const items1 = ref([
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
]);
const items2 = ref([
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
])


</script>

<style >
.container{
  width: 80%;
  margin: auto;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

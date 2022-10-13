<template>
    <div class="root">
        <div class="item">
            <h1>
                {{ selected }}
            </h1>
        </div>
        <ul>
            <li v-for="item in collection" :key="item.id" @click="handleClick(item.name)">
                {{ item.name }}
            </li>
        </ul>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'SelecteItem',
    data: () => ({
        selected: '',
        collection:[
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
    }),
    methods: {
        handleClick(name) {
            this.selected = name;
        }
    }
  }
  </script>
  
  <style scoped>
    .item {
        position: relative;
        border: 5px solid rgb(0, 0, 0);
        margin-bottom: 1rem;
    }

    .item:before{
        content: "";
        display: block;
        padding-top: 10rem;
    }

    h1 {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
  </style>
  
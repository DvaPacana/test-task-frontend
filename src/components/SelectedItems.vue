<template>
    <div class="root">
        <div class="items-container">
            <div v-for="item in selected" :key="item.id" class="item">
                {{ item.name }}
            </div>
        </div>
        <ul>
            <li v-for="item in collection" :key="item.id" @click="handleClick(item)">
                {{ item.name }}
            </li>
        </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SelecteItems',
    data: () => ({
        selected: [],
        collection: [
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
    }),
    methods: {
        handleClick(item) {
            let limit = 6;
            let arr = this.selected

            if (arr.length < limit) {
                arr.indexOf(item) === -1 ? arr.push(item) : console.log("exists")
            }           
        }
    }
  }
  </script>
  
  <style scoped>

    .items-container {
        display: flex;
        flex-wrap: wrap;
        width: 500px;
        height: 100px;
        border: 5px solid rgb(0, 0, 0);
        margin-bottom: 1rem;
    }

    .item {
        border: 2px solid #ccc;
        height: max-content;
        padding: 4px;
        margin: 4px;
    }

    ul {
        margin: 0;
        padding: 1rem;
        border: 5px solid black;
    }

    li {
        list-style: none;
        border: 1px solid #ccc;
        padding: 4px;
        cursor: pointer;
    }

    li:not(:last-child) {
        margin-bottom: 4px;
    }
  </style>
  
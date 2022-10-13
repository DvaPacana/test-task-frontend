<template>
    <div class="root">
        <div class="items-container">
            <div v-for="item in selected" :key="item.id" class="item">
                {{ item.name }}
            </div>

            <div class="count"> 
                Selected: {{ selected.length }} / {{ limit }}
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
        limit: 6,
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
            let arr = this.selected

            if (arr.length < this.limit) {
                arr.indexOf(item) === -1 ? arr.push(item) : console.log("exists")
            }           
        }
    }
  }
  </script>
  
  <style scoped>
    .items-container {
        position: relative;
        display: flex;
        align-items: center;
        border: 5px solid #000;
        margin-bottom: 1rem;
    }

    .items-container:before{
        content: "";
        display: block;
        padding-top: 10rem;
    }

    .item {
        border: 2px solid rgb(20, 17, 17);
        padding: 4px;
        margin: 4px;
    }

    .count {
        position: absolute;
        bottom: 0;
        left: 4px;
    }
  </style>
  
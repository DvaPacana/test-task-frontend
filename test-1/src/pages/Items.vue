<template>
    <section>

        <v-row>
            <v-col cols="6">
                <v-sheet width="50%" border>
                        <v-sheet min-height="10vh">
                            <ListView 
                                :data="topLeft" 
                                :border="false"
                                />
                        </v-sheet>
                        <v-sheet class="ma-2">
                            selected: {{topLeft.length}} / 6
                        </v-sheet>
                </v-sheet>
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
                <v-sheet width="50%" border class="d-flex justify-center align-center">
                    <h3>{{topRight.name}}</h3>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row >
            <v-col cols="6" >
                <ListView 
                    :data="leftBlocks"
                    minHeight="70vh"
                    @clicked="leftClick"
                    />
            </v-col>
            <v-col cols="6">
                <ListView 
                    :data="rightBlocks" 
                    minHeight="70vh"
                    @clicked="rightClick"
                    />
            </v-col>
        </v-row>

    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListView from "@/components/lists/List.vue"
import { Item } from "@/utils/types";

export default defineComponent({
    name: "ItemsView",
    components: { ListView },
    data() {

        const leftBlocks = [
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

        const rightBlocks = [
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

        return { 
            topLeft: [] as Item[], 
            topRight: {} as Item, 
            leftBlocks, 
            rightBlocks 
        };
    },
    methods:{
        leftClick(val: Item) {
            const findItem = this.topLeft.find((e)=> e.id == val.id)
            if(!findItem){
                if(this.topLeft.length <= 5){
                    this.topLeft.unshift(val)
                } else {
                    this.topLeft.pop()
                    this.topLeft.unshift(val)
                }
            }
        },
        rightClick(val: Item) {
            this.topRight = val
        }
    }

    });
</script>
  
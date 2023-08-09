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
import { useAppStore } from "@/store/app";

export default defineComponent({
    name: "ItemsView",
    components: { ListView },
    data() {
        const appStore = useAppStore()
        return { 
            appStore,
            topLeft: [] as Item[], 
            topRight: {} as Item, 
        };
    },
    computed:{
        leftBlocks(){
            return this.appStore.getLeftBlock
        },
        rightBlocks(){
            return this.appStore.getRightBlock
        }
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
    },
    mounted(){
        this.appStore.setBlocks()
    }

    });
</script>
  
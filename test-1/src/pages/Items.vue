<template>
    <section>

        <v-row>
            <v-col cols="6">
                <v-sheet width="50%" border>
                        <v-sheet min-height="10vh">
                            <ListView 
                                :data="selectedLeft" 
                                :border="false"
                                @clicked="removeSelectedItem"
                                />
                        </v-sheet>
                        <v-sheet class="ma-2">
                            selected: {{selectedLeft.length}} / 6
                        </v-sheet>
                </v-sheet>
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
                <v-sheet width="50%" border class="d-flex justify-center align-center">
                    <h3>{{selectedRight.name}}</h3>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row >
            <v-col cols="6" >
                <ListView 
                    :data="leftBlocks"
                    minHeight="70vh"
                    @clicked="addLeftItem"
                    />
            </v-col>
            <v-col cols="6">
                <ListView 
                    :data="rightBlocks" 
                    minHeight="70vh"
                    @clicked="addRightItem"
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
        leftBlocks(){ return this.appStore.getLeftBlock },
        rightBlocks(){ return this.appStore.getRightBlock },
        selectedLeft(){ return this.appStore.getSelectedLeft },
        selectedRight(){ return this.appStore.getSelectedRight }
    },
    methods:{
        addLeftItem(val: Item) {
            this.appStore.addToSelectedLeft(val)
        },
        removeSelectedItem(val: Item) {
            this.appStore.removeFromSelectedLeft(val)
        },
        addRightItem(val: Item) {
            this.appStore.rightClick(val)
        }
    },
    mounted(){
        this.appStore.initBlocks()
    }
});
</script>
  
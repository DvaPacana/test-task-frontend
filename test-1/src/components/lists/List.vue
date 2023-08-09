<template>
    <v-sheet 
        class="d-flex flex-wrap flex-row" 
        rounded
        :border=border
        >
            <v-btn 
                v-for="itm in data" 
                class="ma-2"
                :key="itm.id" 
                :text="itm.name" 
                :color="itm.id === selected ? 'red' : ''"
                @click="$emit('clicked', {...itm})"
                >
            </v-btn>
    </v-sheet>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from "vue";
import VueTypes from "vue-types";
import { Item } from "@/utils/types";

export default defineComponent({
    name: "ListView",
    props: {
        data: {} as PropType<Item[]>,
        selected: VueTypes.number.isRequired,
        border: VueTypes.bool.def(true)
    }

});
</script>
  
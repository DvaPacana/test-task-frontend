<template>
    <v-sheet 
        class="d-flex flex-wrap flex-start align-content-start" 
        rounded
        :border=border
        :min-height=minHeight
        >

            <v-btn 
                v-for="itm in data" 
                class="ma-2 "
                :key="itm.id" 
                :text="itm.name" 
                @click="$emit('clicked', itm)"
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
        border: VueTypes.bool.def(true),
        minHeight: VueTypes.string.def(""),
    }

});
</script>
  
<template>
    <div class="mx-auto w-full max-w-[960px] min-h-[100vh] bg-slate-100">

        <div class="flex p-2">
            <Items class="mr-[10px] h-[112px]">
                <Item v-for="selectedUsersStuff in selectedUsersStuffs" :itemData="selectedUsersStuff" />
            </Items>

            <Items class="h-[112px]">
                <Item v-for="selectedStuffToChoose in selectedStuffsToChoose" :itemData="selectedStuffToChoose" />
            </Items>
        </div>

        <div class="flex p-2">    
            <Items class="mr-[10px]">
                <Item v-for="usersStuff in usersStuffs" :itemData="usersStuff" @click="toggleUsersStuff(usersStuff.id)" />
            </Items>

            <Items>
                <Item v-for="stuffToChoose in stuffsToChoose" :itemData="stuffToChoose"  @click="toggleStuffToChoose(stuffToChoose.id)" />
            </Items>
        </div>

    </div>
</template>



<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Item from '@/components/Item.vue'
import Items from '@/components/Items.vue'

const store = useStore()


const usersStuffs = computed(() => {
    return store.getters.getUsersStuffs
})

const selectedUsersStuffs = computed(() => {
    return store.getters.getSelectedUsersStuffs
})

const stuffsToChoose = computed(() => {
    return store.getters.getStuffsToChoose
})

const selectedStuffsToChoose = computed(() => {
    return store.getters.getSelectedStuffsToChoose
})


function toggleUsersStuff(usersStuffId) {
    store.commit('TOGGLE_USERS_STUFF', usersStuffId)
}

function toggleStuffToChoose(stuffId) {
    store.commit('TOGGLE_STUFFS_TO_CHOOSE', stuffId)
}

</script>

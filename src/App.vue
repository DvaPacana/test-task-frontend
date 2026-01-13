<script setup lang="ts">
    import { ref, useTemplateRef } from 'vue';
    import Inventory from './components/Inventory.vue';
    import type { ItemType } from './types/item.types';
    import Container from './components/Container.vue';
    import Item from './components/Item.vue';

    const selected = ref<{ user: ItemType[], bot: ItemType[] }>({ user: [], bot: [] })

    const user = useTemplateRef('user')
    const bot = useTemplateRef('bot')
</script>

<template>
    <main>
        <section>
            <Container :title="`selected: ${selected.user.length}/${user?.max || 0}`" class="selected">
                <Item :item v-for="item in selected.user" @click="user?.unset(item)"/>
            </Container>
            <Container title="selected item" class="selected bot">
                <Item :item v-for="item in selected.bot" @click="bot?.unset(item)"/>
            </Container>
        </section>
        <section class="inventories">
            <Suspense>
                <Inventory v-model="selected.user" multiple entity="user" ref="user"/>                
            </Suspense>
            <Suspense>
                <Inventory v-model="selected.bot" entity="bot" ref="bot"/>
            </Suspense>
        </section>
    </main>
</template>

<style scoped>
    main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
        section {
            display: flex;
            gap: 12px;
            @media screen and (width < 768px) { flex-direction: column; }
            &.inventories {
                flex-grow: 1;
            }
            .selected {
                height: 100px;
                flex-direction: row;
                @media screen and (width > 768px) { &.bot {
                    max-width: 200px;
                }}
                * {
                    max-height: 100%;
                }
            }
        }
        
    }
</style>
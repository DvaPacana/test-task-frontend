<script setup lang="ts">
import { choiceItems, userItems } from '../shared/constants/mock'
import { useItemsPresenter } from '../presenters/useItemsPresenter';

const {
    selectedUserItems,
    selectedChoiceItem,
    selectedCount,
    isUserItemSelected,
    toggleUserItem,
    selectChoiceItem,
} = useItemsPresenter()
</script>

<template>
    <div class="page">
        <div class="top">
            <div class="block">
                <h3>Выбранные вещи пользователя ({{ selectedCount }}/6)</h3>
                <div v-for="item in selectedUserItems" :key="item.id">{{ item.name }}</div>
            </div>


            <div class="block">
                <h3>Выбранная вещь из вещей на выбор (1)</h3>
                <div v-if="selectedChoiceItem">{{ selectedChoiceItem.name }}</div>
                <div v-else class="empty">Ничего не выбрано</div>
            </div>
        </div>


        <div class="bottom">
            <div class="block">
                <h3>Вещи пользователя</h3>
                <div v-for="item in userItems" :key="item.id" :class="{ active: isUserItemSelected(item) }"
                    @click="toggleUserItem(item)">
                    {{ item.name }}
                </div>
            </div>


            <div class="block">
                <h3>Вещи на выбор</h3>
                <div v-for="item in choiceItems" :key="item.id" :class="{ active: selectedChoiceItem?.id === item.id }"
                    @click="selectChoiceItem(item)">
                    {{ item.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
.page {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
}

.top,
.bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.block {
    background-color: darkgrey;
    border: 1px solid #ccc;
    padding: 16px;
    min-height: 150px;
}

.empty {
    color: #fff;
}
</style>

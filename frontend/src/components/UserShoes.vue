<template>
    <div class="container">
        <div class="top-container">
            <div class="top-left">
                <div class="items-grid">
                    <div
                        v-for="item in selectedUserItems"
                        :key="item.id"
                        class="item-box"
						@click="selectUserItem(item)"
                    >
                        {{ item.name }}
                    </div>
                </div>
                <p>Выбрано: {{ selectedUserItems.length }} / 6</p>
            </div>
            <div class="top-right">
                <div v-if="selectedChoiceItem" class="item-box large" @click="selectChoiceItem(selectedChoiceItem)">
                    {{ selectedChoiceItem.name }}
                </div>
                <div v-else class="item-box large">Выберите вариант</div>
            </div>
        </div>

        <div class="bottom-container">
            <div class="bottom-left">
                <div
                    v-for="item in userItems"
                    :key="item.id"
                    class="item-box"
                    @click="selectUserItem(item)"
                    :class="{ selected: selectedUserItems.includes(item) }"
                >
                    {{ item.name }}
                </div>
            </div>
            <div class="bottom-right">
                <div
                    v-for="item in choiceItems"
                    :key="item.id"
                    class="item-box"
                    @click="selectChoiceItem(item)"
                    :class="{ selected: selectedChoiceItem?.id === item.id }"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Item } from "@/types/shoes";

const props = defineProps<{
  userItems: Item[];
  choiceItems: Item[];
}>();

const selectedUserItems = ref<Item[]>([]);
const selectedChoiceItem = ref<Item | null>(null);

const selectUserItem = (item: Item) => {
    if (selectedUserItems.value.includes(item)) {
        selectedUserItems.value = selectedUserItems.value.filter(
            (i) => i.id !== item.id
        );
    } else if (selectedUserItems.value.length < 6) {
        selectedUserItems.value.push(item);
    }
};

const selectChoiceItem = (item: Item) => {
    if (selectedChoiceItem.value?.id === item.id) {
        selectedChoiceItem.value = null;
    } else {
        selectedChoiceItem.value = item;
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    font-family: Arial, sans-serif;
}

.top-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.top-left,
.top-right,
.bottom-left,
.bottom-right {
	display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    margin: 0 10px;
    border: 1px solid #000;
    padding: 10px;
}

.items-grid {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.item-box {
    padding: 10px;
    border: 1px solid #000;
    text-align: center;
    cursor: pointer;
	transition: background-color 0.3s ease;
}

.item-box:hover {
	background-color: #b3d7ff;
}

.item-box.large {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
}

.bottom-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
}

.selected {
    background-color: #d0ebff;
}
</style>

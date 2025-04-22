<template>
    <div>
        <div class="top-section">
            <div class="top-section__left">
                items:
                <div style="display: flex; gap: 10px;">
                    <SomeItem
                            v-for="item in selectedLeftItemsArr"
                            :key="item.id"
                            :item="item"
                    />
                </div>
            </div>

            <div class="top-section__right">
                Selected item:
                <SomeItem :item="selectedRightItem[0] ?? null" :rightItem="true" />
            </div>
        </div>

        <div class="bottom-section">
            <div class="bottom-section__left">
                <SomeItem
                        v-for="item in leftItems"
                        :key="item.id"
                        :item="item"
                        :selectedItems="selectedLeftItemsArr"
                        @select="selectLeftItem"
                />
            </div>

            <div class="bottom-section__right">
                <SomeItem
                        v-for="item in rightItems"
                        :key="item.id"
                        :item="item"
                        :rightItem="true"
                        @click.native="selectRightItem(item)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import SomeItem from './components/SomeItem.vue'

export default {
    name: 'App',
    components: {
        SomeItem
    },
    data() {
        return {
            maxSelected: 6,
            selectedLeftItemsArr: [],
            selectedRightItem: [],
            leftItems: [
                { id: 1, name: 'Shoes 1' },
                { id: 2, name: 'Shoes 2' },
                { id: 3, name: 'Shoes 3' },
                { id: 4, name: 'Shoes 4' },
                { id: 5, name: 'T-shirt 1' },
                { id: 6, name: 'T-shirt 2' },
                { id: 7, name: 'T-shirt 3' },
                { id: 8, name: 'T-shirt 4' }
            ],
            rightItems: [
                { id: 11, name: 'Jacket 1' },
                { id: 12, name: 'Jacket 2' },
                { id: 13, name: 'Jacket 3' },
                { id: 14, name: 'Jacket 4' },
                { id: 15, name: 'Hoodie 1' },
                { id: 16, name: 'Hoodie 2' },
                { id: 17, name: 'Hoodie 3' },
                { id: 18, name: 'Hoodie 4' }
            ]
        }
    },
    methods: {
        selectLeftItem(item) {
            const index = this.selectedLeftItemsArr.findIndex(i => i.id === item.id)
            if (index === -1) {
                if (this.selectedLeftItemsArr.length < this.maxSelected) {
                    this.selectedLeftItemsArr.push(item)
                } else {
                    alert(`You can select up to ${this.maxSelected} items.`)
                }
            } else {
                this.selectedLeftItemsArr.splice(index, 1)
            }
        },
        selectRightItem(item) {
            this.selectedRightItem = [item]
        }
    }
}
</script>

<style lang="scss">
.top-section, .bottom-section {
    display: flex;
    justify-content: space-between;

    &__left, &__right {
        display: flex;
        border: 5px solid black;
        padding: 20px;
        flex-direction: column;
        width: 45%;
    }
}

.bottom-section {
    margin-top: 10px;

    &__left, &__right {
        width: 45%;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }
}
</style>

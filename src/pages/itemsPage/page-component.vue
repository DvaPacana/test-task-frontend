<template>
  <div class="grid">
    <div class="left-top">
      <div class="items">
        <ListComponent
          @on-item-click="removeFromLeftside"
          :items="leftSideSelected"
        />
      </div>
      <div class="count">
        selected: {{ getLeftsideSelectedCount }} /
        {{ getLeftsideMaxSelectCount }}
      </div>
    </div>
    <div class="right-top" v-if="rightSideSelected">
      <Item :name="rightSideSelected.name" @click="removeFromRightside" />
    </div>
    <div class="left-bottom items">
      <ListComponent
        @on-item-click="selectFromLeftside"
        :items="leftSideItems"
      />
    </div>
    <div class="right-bottom items">
      <ListComponent
        @on-item-click="selectedFromRightside"
        :items="rightSideItems"
      />
    </div>
  </div>
</template>

<script>
import { ListComponent } from '../../shared/ui'
import { itemsApi } from '../../shared/api/items'
import { ItemComponent } from '../../entities/item'
export default {
  name: 'PageComponent',
  components: {
    ListComponent,
    Item: ItemComponent,
  },
  data() {
    return {
      rightSideSelected: null,
      leftSideSelected: [],
      leftSideItems: [],
      rightSideItems: [],
    }
  },
  created() {
    itemsApi.getLeftsideItems().then((res) => (this.leftSideItems = res))
    itemsApi.getRighttsideItems().then((res) => (this.rightSideItems = res))
  },
  computed: {
    getLeftsideMaxSelectCount() {
      return 6
    },
    getLeftsideSelectedCount() {
      return this.leftSideSelected.length
    },
  },
  methods: {
    selectFromLeftside(item) {
      if (
        this.leftSideSelected.length < this.getLeftsideMaxSelectCount &&
        !this.leftSideSelected.includes(item)
      ) {
        this.leftSideSelected.push(item)
      }
    },
    removeFromLeftside(item) {
      this.leftSideSelected = this.leftSideSelected.filter((i) => i !== item)
    },
    selectedFromRightside(item) {
      this.rightSideSelected = item
    },
    removeFromRightside() {
      this.rightSideSelected = null
    },
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-areas:
    'leftTop rightTop'
    'leftBottom rightBottom';
  gap: 30px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.left-bottom,
.left-top,
.right-bottom,
.right-top {
  display: flex;
  border: 2px solid black;
  padding: 10px;
}

.left-top {
  width: 20vw;
  grid-area: leftTop;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.left-top .count {
  align-self: flex-start;
}

.right-top {
  width: 20vw;
  justify-self: right;
  grid-area: rightTop;
}

.left-bottom {
  width: 40vw;
  grid-area: leftBottom;
}

.right-bottom {
  justify-self: right;
  width: 40vw;
  grid-area: rightBottom;
}
</style>

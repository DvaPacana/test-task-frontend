<template>
  <div class="container">
    <h2>Выбранные вещи</h2>
    <div class="selected-blocks">
      <div class="selected-left">
        <h3>Левые выбранные</h3>
        <div v-if="selectedLeft.length === 0">Ничего не выбрано</div>
        <ul>
          <li v-for="item in selectedLeft" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>

      <div class="selected-right">
        <h3>Право выбранное</h3>
        <div>{{ selectedRight ? selectedRight.name : 'Ничего' }}</div>
      </div>
    </div>

    <div class="lists">
      <!-- Левый список (несколько) -->
      <div class="list-left">
        <h4>Вещи пользователя</h4>
        <ul>
          <li
              v-for="item in itemsLeft"
              :key="item.id"
              @click="selectLeft(item)"
              :class="{disabled: isLeftDisabled(item)}"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>

      <!-- Правый список (один) -->
      <div class="list-right">
        <h4>Вещи на выбор</h4>
        <ul>
          <li
              v-for="item in itemsRight"
              :key="item.id"
              @click="selectRight(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsLeft: [
        { id: 1, name: "Shoes 1" },
        { id: 2, name: "Shoes 2" },
        { id: 3, name: "Shoes 3" },
        { id: 4, name: "Shoes 4" },
        { id: 5, name: "T-shirt 1" },
        { id: 6, name: "T-shirt 2" },
        { id: 7, name: "T-shirt 3" },
        { id: 8, name: "T-shirt 4" }
      ],
      itemsRight: [
        { id: 11, name: "Jacket 1" },
        { id: 12, name: "Jacket 2" },
        { id: 13, name: "Jacket 3" },
        { id: 14, name: "Jacket 4" },
        { id: 15, name: "Hoodie 1" },
        { id: 16, name: "Hoodie 2" },
        { id: 17, name: "Hoodie 3" },
        { id: 18, name: "Hoodie 4" }
      ],
      selectedLeft: [],
      selectedRight: null
    }
  },
  methods: {
    selectLeft(item) {
      // если уже выбран — убрать
      const idx = this.selectedLeft.findIndex(i => i.id === item.id)
      if (idx !== -1) {
        this.selectedLeft.splice(idx, 1)
        return
      }
      // если достигли 6 элементов — больше не добавлять
      if (this.selectedLeft.length >= 6) {
        alert("Можно выбрать только до 6 предметов")
        return
      }
      this.selectedLeft.push(item)
    },
    selectRight(item) {
      this.selectedRight = item
    },
    isLeftDisabled(item) {
      return (
          !this.selectedLeft.find(i => i.id === item.id) &&
          this.selectedLeft.length >= 6
      )
    }
  }
}
</script>

<style>
.container {
  padding: 16px;
}

.selected-blocks {
  display: flex;
  gap: 40px;
  margin-bottom: 32px;
}

.selected-left,
.selected-right,
.list-left,
.list-right {
  border: 1px solid #ccc;
  padding: 12px;
  width: 45%;
}

.lists {
  display: flex;
  gap: 40px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 6px;
  cursor: pointer;
}

li:hover {
  background: #f0f0f0;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>

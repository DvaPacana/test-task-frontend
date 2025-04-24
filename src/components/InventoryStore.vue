<script>
export default {
  data() {
    return {
      userItems: [
        { id: 1, name: "Shoes 1" },
        { id: 2, name: "Shoes 2" },
        { id: 3, name: "Shoes 3" },
        { id: 4, name: "Shoes 4" },
        { id: 5, name: "T-shirt 1" },
        { id: 6, name: "T-shirt 2" },
        { id: 7, name: "T-shirt 3" },
        { id: 8, name: "T-shirt 4" }
      ],
      selectedUserItems: [],
      choiceItems: [
        { id: 11, name: "Jacket 1" },
        { id: 12, name: "Jacket 2" },
        { id: 13, name: "Jacket 3" },
        { id: 14, name: "Jacket 4" },
        { id: 15, name: "Hoodie 1" },
        { id: 16, name: "Hoodie 2" },
        { id: 17, name: "Hoodie 3" },
        { id: 18, name: "Hoodie 4" }
      ],
      selectedChoice: null
    };
  },
  methods: {
    toggleUserItem(item) {
      const index = this.selectedUserItems.indexOf(item);
      if (index === -1 && this.selectedUserItems.length < 6) {
        this.selectedUserItems.push(item);
      } else if (index !== -1) {
        this.selectedUserItems.splice(index, 1);
      }
    },
    selectChoiceItem(item) {
      this.selectedChoice = item;
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="top-blocks">
      <div class="left-block">
        <h3>Selected Item</h3>
        <ul>
          <li v-for="item in selectedUserItems" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
      <div class="right-block">
        <h3>Selected Item</h3>
        <p v-if="selectedChoice">{{ selectedChoice.name }}</p>
      </div>
    </div>
    <div class="bottom-blocks">
      <div class="left-bottom">
        <ul>
          <li
            v-for="item in userItems"
            :key="item.id"
            :class="{'selected': selectedUserItems.includes(item)}"
            @click="toggleUserItem(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="right-bottom">
        <ul>
          <li
            v-for="item in choiceItems"
            :key="item.id"
            :class="{'selected': selectedChoice && selectedChoice.id === item.id}"
            @click="selectChoiceItem(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-blocks {
  display: flex;
  justify-content: space-between;
}

.left-block, .right-block {
  width: 45%;
  border: 2px solid;
  padding: 10px;
}

.bottom-blocks {
  display: flex;
  justify-content: space-between;
}

.left-bottom, .right-bottom {
  width: 45%;
  border: 2px solid;
  padding: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li, p{
  cursor: pointer;
  padding: 5px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.selected {
  background-color: #d3d3d3;
}

h3 {
  margin-bottom: 10px;
  border-bottom: 1px solid;
}
</style>

<template>
  <div>
    <div class="flexr">
      <div class="wrapper first">
        <div v-if="arrsell != []" class="arrsellwrapp">
          <div
            v-for="(item, index) in arrsell"
            :key="item.id"
            class="itemarrsell"
          >
            {{ item.id }}-{{ item.name }}
          </div>
        </div>
        <div>Selected {{ arrsell.length }}/{{ arr3.length }}</div>
      </div>
      <div class="wrapper first">
        <div v-if="selitem[0].id != ''">
          <div
            v-for="(item, index) in selitem"
            :key="item.id"
            class="firth firsts"
          >
            <div>{{ item.id }}-</div>
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flexr">
      <div class="wrapper sec">
        <div class="thirdwrapper">
          <div
            v-for="(item, index) in arr3"
            :key="item.id"
            class="third"
            @click="add2(item.id, item.name)"
          >
            {{ item.id }}
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="wrapper sec">
        <div class="thirdwrapper">
          <div
            v-for="(item, index) in arr4"
            :key="item.id"
            class="third"
            @click="add1(item.id, item.name)"
          >
            {{ item.id }}
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tables",
  data() {
    return {
      arr3: [
        {
          id: 1,
          name: "Shoes 1",
        },
        {
          id: 2,
          name: "Shoes 2",
        },
        {
          id: 3,
          name: "Shoes 3",
        },
        {
          id: 4,
          name: "Shoes 4",
        },
        {
          id: 5,
          name: "T-shirt 1",
        },
        {
          id: 6,
          name: "T-shirt 2",
        },
        {
          id: 7,
          name: "T-shirt 3",
        },
        {
          id: 8,
          name: "T-shirt 4",
        },
      ],
      arr4: [
        {
          id: 11,
          name: "Jacket 1",
        },
        {
          id: 12,
          name: "Jacket 2",
        },
        {
          id: 13,
          name: "Jacket 3",
        },
        {
          id: 14,
          name: "Jacket 4",
        },
        {
          id: 15,
          name: "Hoodie 1",
        },
        {
          id: 16,
          name: "Hoodie 2",
        },
        {
          id: 17,
          name: "Hoodie 3",
        },
        {
          id: 18,
          name: "Hoodie 4",
        },
      ],
      selitem: [
        {
          id: "",
          name: "",
        },
      ],
      arrsell: [],
    };
  },

  methods: {
    add1(id, name) {
      this.selitem[0].id = id;
      this.selitem[0].name = name;
    },
    add2(id, name) {
      if (this.arrsell.length < 6) {
        this.arrsell.push({ id: id, name: name });
      } else {
        alert("Колличество выбранных товаров не может превышать 6 eд.");
      }
    },
  },
};
</script>

<style scoped>
.flexr {
  display: flex;
  flex-direction: row;
  width: 83vw;
  justify-content: space-between;
  padding: 2vw;
}
.wrapper {
  width: 20vw;
  border: 1px solid black;
}
.first {
  height: 17vw;
  width: 20vw;
  padding: 1vw;
}
.firsts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1vw;
  width: 4vw;
  height: 4vw;
}
.sec {
  height: 30vw;
  width: 37vw;
  padding: 1vw;
}
.thirdwrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2vw;
  flex-wrap: wrap;
}
.third {
  width: 5vw;
  height: 5vw;
  border: 1px solid black;
  padding: 1vw;
  margin-bottom: 2vw;
}
.firth {
  width: 18vw;
  height: 9vw;
  border: 1px solid black;
  padding: 1vw;
  justify-content: center;
  padding-top: 5vw;
}
.itemarrsell {
  width: 5vw;
  height: 5vw;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vw;
  padding: 0.2vw;
}
.arrsellwrapp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
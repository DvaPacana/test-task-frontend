<style>
  @import 'css/global.css';
</style>
<script setup lang="ts">
import { reactive } from 'vue'
import ClothItem from './components/ClothItem.vue'
import choosing from './data/ChoosingCloth.json'
import user from './data/UserCloth.json'

const cloth = reactive({choosing, user}), // левая и правая корзины вещей
  se = (i :any) => i.sel,
  max = {choosing: 6, user: 1} // макс. выборки вещей слева и справа

const sel = (i :any, index :number, group ='user') => {
  const cart = cloth[group as keyof typeof cloth],
    selCnt = cart.reduce((s :number, x :any) => s + +!!x.sel, 0)

  if ( //добавление, если менее максимального и убирание при максимальном и ниже
    group === 'choosing' && (selCnt < max.choosing || selCnt >= max.choosing && (cloth.choosing[index] as any).sel) ||
      group === 'user' && (selCnt < max.user && max.user > 1 || selCnt >= max.user && (cloth[group][index] as any).sel)
  ) {
    (cart[index] as any).sel = (cart[index] as any).sel ? undefined : 'sel' // убираем/добавляем
  } else if (group === 'choosing' && max.choosing < 2 || group === 'user' && max.user < 2) // если только..., то делаем
    cloth[group as keyof typeof cloth] // чистим всё, где не кликнуто и ставим там, где кликнуто (логика правой корзины)
      = cloth[group].map((x :any) => ({id: x.id, name: x.name, sel: x.id === i.id ? 'sel' : undefined}) )
}
</script>

<template>
  <div class="clothOver">
    <div class="cloSelected">
      <div class="cloChoose">
        <ClothItem v-for="i in cloth.choosing.filter((x :any) => x.sel)" :key="i.id"
            :id="i.id" :name="i.name" :sel="se(i)" />
      </div>
      <div class="cloCnt">
        {{ cloth.choosing.reduce((s :number, x :any) => s + +!!x.sel, 0) }} / {{ max.choosing }}</div>
      <div class="cloUse">
        <ClothItem v-for="i in cloth.user.filter((x :any) => x.sel)" :key="i.id"
            :id="i.id" :name="i.name" :sel="se(i)" />
      </div>
    </div>
    <div :class="{cloBase: 1, disButtChoz: max.choosing > 1, disButtUser: max.user > 1}">
      <div :class="{cloChoz_: 1, noAdd: cloth.choosing.reduce((s :number, x :any) => s + +!!x.sel, 0) >= max.choosing}">
        <ClothItem v-for="(i, index) in cloth.choosing" :key="i.id" :id="i.id" :name="i.name" :sel="se(i)"
            @click="sel(i, index, 'choosing')" />
      </div>
      <div :class="{cloUser: 1, noAdd: cloth.user.reduce((s :number, x :any) => s + +!!x.sel, 0) >= max.user}">
        <ClothItem v-for="(i, index) in cloth.user" :key="i.id" :id="i.id" :name="i.name" :sel="se(i)"
            @click="sel(i, index)" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.clothOver {
  max-width: 1024px;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  .cloBase,
  .cloSelected {
    position: relative;
    display: flex;
    .cloChoz_,
    .cloChoose {
      width: 50%;
      height: 20vh;
      background-color: #e8e8e8;
    }
    .cloUser,
    .cloUse {
      width: 50%;
      height: 20vh;
      background-color: #eee;
    }
    .cloUse {
      text-align: right;
      .it {
        padding: 2rem 3.5rem;
      }
    }
    .cloCnt {
      position: absolute;
      left: 6px;
      bottom: 0;
    }
  }
  .cloBase {
    .cloChoz_ {
      height: 80vh;
      background-color: #eee;
    }
    .cloUser {
      height: 80vh;
      background-color: #f4f4f4;
    }
    .cloUse {
      text-align: right;
    }
  }
}
.disButtUser .cloUser.noAdd .it:not(.sel),
.disButtChoz .cloChoz_.noAdd .it:not(.sel) {
  background-color: #f8f8f8;
  color: #aaa;
  cursor: no-drop;
}
</style>

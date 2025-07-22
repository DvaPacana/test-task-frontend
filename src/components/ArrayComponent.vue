<template>
  <div>
    <div class="container" :class="{'none-active': selected.length >= maxValue}">
      <item-component
        v-for="item in items" :key="item.id"
        :item="item"
        :is-clickable="isClickable"
        :class="{'active': isSelected(item.id)}"
        @on-select="onSelect"
      />
    </div>
    <slot name="default" />
  </div>
</template>

<script>
  import ItemComponent from './ItemComponent'

  export default {
    name: 'ArrayComponent',
    components: { ItemComponent },
    props: {
      items: {
        type: Array,
        default: () => [],
      },
      selected: {
        type: Array,
        default: () => [],
      },
      maxValue: {
        type: Number,
        default: 1,
      }
    },
    data: function () {
      return {
        isClickable: Boolean(this.$listeners['on-add']),
      }
    },
    methods: {
      onSelect: function (inner) {
        const isExist = this.selected.some(item => item.id === inner.id);
        if (!isExist && this.maxValue > this.selected.length) {
            this.$emit( 'on-add', inner)
        } else {
            this.$emit( 'on-remove', inner)
        }
      },
      isSelected: function (id) {
        return this.selected.some(item => item.id === id);
      },
    }
  }
</script>

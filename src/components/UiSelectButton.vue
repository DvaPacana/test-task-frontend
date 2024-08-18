<template>
  <button v-if="item.name" class="select-button" @click="onSelect" :disabled="isDisabled" v-text="item.name" />
</template>

<script>
// ui
export default {
	props: {
		item: { type: Object, required: true },
		isDisabled: { type: Boolean, default: false }
	},
	methods: {
		onSelect() {
			this.$emit('select', this.item);
		}
	}
};
</script>

<style scoped>
.select-button {
	border: 2px solid black;
	padding: 10px;
	background: pink;
}
</style>
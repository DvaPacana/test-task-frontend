<script lang="ts" setup>
const props = defineProps<{
	labelText: string
}>()
const emits = defineEmits<{
	(event: 'click'): void
}>()

const onClick = () => {
	emits('click')
}
</script>

<template>
	<div class="select">
		<label @click="onClick">
			{{ props.labelText }}
		</label>
	</div>
</template>

<style scoped>
.select {
	border: 1px solid #888;
	margin: 5px;
	padding: 5px;
	height: 5%;
}
</style>

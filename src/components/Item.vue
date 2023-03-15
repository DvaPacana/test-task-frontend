<template>
	<li
		class="grow basis-[25%] max-w-[calc(25%-10px)] m-[5px] p-[5px] text-center rounded-[6px] bg-slate-300 cursor-pointer select-none"
		:key="itemData.id"
		:class="{ 'bg-slate-400': itemData.isSelected }"
	>
		{{ itemData.name }}
	</li>
</template>



<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        validator(itemData) {
			return itemData.hasOwnProperty('id') && itemData.hasOwnProperty('name')
		},
    }
})

</script>

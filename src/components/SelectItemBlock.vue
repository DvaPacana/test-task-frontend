<template>
	<div class="border area-items">
	  <h2 class="area-items__title">{{ meaningBlock }}</h2>
	  <div v-if="item" class="area-items__only-item">
		{{ item.name }}
	  </div>
	</div>
 </template>
 
 <script>
 export default {
	props: { 
		item: {
			type:[ Object, null],
			required: true
		},
		meaningBlock: {
			type: String,
			required: false
		},
	},

 };
 </script>
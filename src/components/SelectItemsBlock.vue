<template>
	<div class="border area-items">
	  <h2 class="area-items__title">{{ meaningBlock }}</h2>
	  <ul class="area-items__list">
		 <li 
		 class="area-items__item border"
		 v-for="item in items.slice(0, limit)" 
		 :key="item.id"		
		 @click="$emit('ItemSelected', item)">
			{{ item.name }}
		 </li>
	  </ul>
	</div>
 </template>
 
 <script>
 export default {
	props: { 
		items: {
			type:[ Array, Object],
			required: true
		},
		meaningBlock: {
			type: String,
			required: false
		},
		limit: {
      type: Number,
      required: false,
      default: Infinity
    }
	},

 };
 </script>
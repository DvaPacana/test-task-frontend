<template>
	<div class="main">
		<div class="main__container blocks">
			<div class="blocks__body">
				<div class="blocks__top">
					<div class="blocks__columns">
						<SelectItemsBlock 
						:limit="6"
						meaningBlock="Выбранные вещи:"
						class="blocks__column blocks__column_rubber"
						:items="selectedUserItems"
						/>
						<SelectItemBlock 
						meaningBlock="Выбранная вещь:"
						class="blocks__column blocks__column_rubber"
						:item="selectedItem"
						/>
					</div>
				</div>	
				<div class="blocks__bottom">
					<div class="blocks__columns">
						<SelectItemsBlock 
						meaningBlock="Мои вещи:"
						@ItemSelected="onUserItemSelected"
						class="blocks__column"
						:items="userItems"
						/>
						<SelectItemsBlock 
						meaningBlock="Вещи на выбор:"
						@ItemSelected="onItemSelected"
						class="blocks__column"
						:items="shopItems"
						/>
					</div>		
				</div>
			</div>		
		</div>	 
	</div>
 </template>
 
 <script>
 import SelectItemsBlock from "@/components/SelectItemsBlock";
 import SelectItemBlock from "@/components/SelectItemBlock";
 import {mapState, mapActions} from 'vuex'


export default {
	

	data() {	
		return { 
			selectedUserItems: [], // выбранные вещи пользователя
			selectedItem: null, // выбранная вещь на выбор
		}
	},
	components: {
	  SelectItemsBlock,
	  SelectItemBlock,
	},
	methods: {
	...mapActions({
		setUserItems: 'user/setUserItems',
		setShopItems: 'products/setShopItems',
}),
		onUserItemSelected(item) {
		this.selectedUserItems.push(item); // добавляем выбранную вещь пользователя в список выбранных вещей
		},
		onItemSelected(item) {
			this.selectedItem = item; // устанавливаем выбранную вещь на выбор
		},
		
	},
	computed: {
	...mapState({
		userItems: state => state.user.userItems,
		shopItems: state => state.products.shopItems,  
	}),
},


}
	</script>



<style>

/* null style =========================================*/

* {
	padding: 0px;
	margin: 0px;
	border: 0px;
}

*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

:focus,
:active {}

a:focus,
a:active {}

aside,
nav,
footer,
header,
section {
	display: block;
}

html {
	font-size: 12px;
}

html,
body {
	height: 100%;
	min-width: 320px;
	max-width: 1440px;
}

body {
	line-height: 1;
	font-family: 'Roboto', sans-serif;
	text-rendering: optimizeLegibility;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
	font-family: 'Roboto', sans-serif;
	font-size: inherit;
}

input::-ms-clear {
	display: none;
}

button {
	cursor: pointer;
	background-color: inherit;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

a,
a:visited {
	text-decoration: none;
}

a:hover {
	text-decoration: none;
}

li {
	list-style-type: none;
}

ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}

/* main style =========================================*/


body {
	color: #121212;
}

[class*="__container"] {
	max-width: 1098px;
	margin: 0 auto;
	position: relative;
	width: 100%;
	height: 100%;
	padding: 0 15px;
}


.blocks__body {
	margin: 30px auto;
	border: 5px solid #121212;
	padding: 10px;
	min-height: 500px;
	display: flex;
	flex-direction: column;

}

.border {
	border: 5px solid #121212;
	padding: 10px;
}

.blocks__top {
	margin-bottom: 10px;
}
.blocks__bottom {
	display: flex;
	flex: 1 1 100%;
}
.blocks__columns {
	display: flex;
	justify-content: space-between;
	gap: 10px;
	flex: 1 1 100%;
}
.blocks__column {
	display: flex;
	flex: 0 1 50%;
	height: 100%;
	flex-direction: column;
	min-height: 152px;
}

.blocks__column_rubber {
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: 150px;
	min-width: 150px;
}

.area-items {

}
.area-items__title {
	margin-bottom: 5px;
}
.area-items__list{
	display: flex;
	flex-wrap: wrap;
	gap:5px;
}
.area-items__item{
	flex: 0 0 50px;
	height: 50px;
	overflow: hidden;
	padding: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.area-items__only-item{
	flex: 1 1 100%;
	height: 100%;
	overflow: hidden;
	padding: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 30px;

}



</style>
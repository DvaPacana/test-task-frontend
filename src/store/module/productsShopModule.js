export const productsShopModule = {
	state:() => ({
		shopItems: [
			{
				 "id": 11,
				 "name": "Jacket 1"
			},
			{
				 "id": 12,
				 "name": "Jacket 2"
			},
			{
				 "id": 13,
				 "name": "Jacket 3"
			},
			{
				 "id": 14,
				 "name": "Jacket 4"
			},
			{
				 "id": 15,
				 "name": "Hoodie 1"
			},
			{
				 "id": 16,
				 "name": "Hoodie 2"
			},
			{
				 "id": 17,
				 "name": "Hoodie 3"
			},
			{
				 "id": 18,
				 "name": "Hoodie 4"
			}
	  ]
	}),
	getters: {
		
	},
	mutations: {
		SET_SHOP_ITEMS (state, shopItems) {
			state.shopItems = shopItems
		 },
		
	},
	actions: {
		setShopItems({ commit, state }, shopItems) {
			
			commit('SET_USER_ITEMS', shopItems)
		 },
	
	  
	},
	namespaced:true 
}
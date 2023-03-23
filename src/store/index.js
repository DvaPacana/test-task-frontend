import { createStore } from 'vuex'
import { userModule } from '@/store/module/userModule'
import { productsShopModule } from '@/store/module/productsShopModule'


export default createStore({

  modules: {
	user: userModule,
	products: productsShopModule,
  }
})

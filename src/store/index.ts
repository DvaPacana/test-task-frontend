import { createStore } from 'vuex'
import lefts from './lefts'
import rights from './rights'

export default createStore({
	modules: {
		lefts,
		rights,
	},
})

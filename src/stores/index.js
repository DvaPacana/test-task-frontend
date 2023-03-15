import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			usersStuffs: [
				{
					id: 1,
					name: 'Shoes 1',
				},
				{
					id: 2,
					name: 'Shoes 2',
				},
				{
					id: 3,
					name: 'Shoes 3',
				},
				{
					id: 4,
					name: 'Shoes 4',
				},
				{
					id: 5,
					name: 'T-shirt 1',
				},
				{
					id: 6,
					name: 'T-shirt 2',
				},
				{
					id: 7,
					name: 'T-shirt 3',
				},
				{
					id: 8,
					name: 'T-shirt 4',
				},
			],
			stuffsToChoose: [
				{
					id: 11,
					name: 'Jacket 1',
				},
				{
					id: 12,
					name: 'Jacket 2',
				},
				{
					id: 13,
					name: 'Jacket 3',
				},
				{
					id: 14,
					name: 'Jacket 4',
				},
				{
					id: 15,
					name: 'Hoodie 1',
				},
				{
					id: 16,
					name: 'Hoodie 2',
				},
				{
					id: 17,
					name: 'Hoodie 3',
				},
				{
					id: 18,
					name: 'Hoodie 4',
				},
			],
			selectedUsersStuffs: [],
			selectedStuffsToChoose: [],
			settings: {
				maxUsersStuffs: 6,
				maxStuffsToChoose: 1
			}
		}
	},

	mutations: {
		TOGGLE_USERS_STUFF(state, usersStuffId) {
			if ( !state.selectedUsersStuffs.find(item => item.id === usersStuffId ) ) {
				if (state.selectedUsersStuffs.length < state.settings.maxUsersStuffs ) {
					state.selectedUsersStuffs.push({...state.usersStuffs.find(item => item.id === usersStuffId), isSelected: false})
				}
			}
			else {
				if (state.selectedUsersStuffs.length <= state.settings.maxUsersStuffs ) {
					state.selectedUsersStuffs = state.selectedUsersStuffs.filter(item => item.id !== usersStuffId)
				}
			}
		},

		TOGGLE_STUFFS_TO_CHOOSE(state, stuffId) {
			if ( state.selectedStuffsToChoose.length === 0 ) {
				state.selectedStuffsToChoose.push({...state.stuffsToChoose.find(item => item.id === stuffId), isSelected: false})
			}
			else {
				state.selectedStuffsToChoose = state.selectedStuffsToChoose.filter(item => item.id !== stuffId)
			}
		},
	},

	actions: {

	},

	getters: {
		getUsersStuffs(state) {
			const selectedUsersStuffsIds = state.selectedUsersStuffs.map(item => item.id)
			return state.usersStuffs.map(item => {
				if ( selectedUsersStuffsIds.indexOf(item.id) !== -1 ) {
					return {...item, isSelected: true }
				}
				else {
					return {...item, isSelected: false }
				}
			})
		},

		getStuffsToChoose(state) {
			return state.stuffsToChoose.map(item => {
				if ( state.selectedStuffsToChoose[0]?.id === item.id ) {
					return {...item, isSelected: true }
				}
				else {
					return {...item, isSelected: false }
				}
			})
		},

		getSelectedUsersStuffs(state) {
			return state.selectedUsersStuffs
		},

		getSelectedStuffsToChoose(state) {
			return state.selectedStuffsToChoose
		},
	},
})

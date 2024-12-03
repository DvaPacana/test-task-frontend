import { defineStore } from 'pinia';
import { Thing } from './interfaces';

export const useTestStore = defineStore('store', {
	state: () => {
		return {
			userThings: <Thing[]>[],
			choiceThing: <Thing | null>null,
		}
	},
	actions: {
		addChoiceThing(thing: Thing) {
			this.choiceThing = thing;
		},
		removeChoiceThing() {
			this.choiceThing = null;
		},
		toggleChoiceThing(thing: Thing) {
			if (thing === this.choiceThing) {
				this.removeChoiceThing();
			} else {
				this.addChoiceThing(thing);
			}
		},
		addUserThing(thing: Thing) {
			this.userThings.push(thing);
		},
		removeUserThing(thing: Thing) {
			const index = this.userThings.indexOf(thing);
			if (index != -1) this.userThings.splice(index, 1);
		},
		toggleThing(thing: Thing) {
			if (
				this.userThings.length < 6 &&
				!this.userThings.includes(thing)
			) {
				this.addUserThing(thing);
			} else {
				this.removeUserThing(thing);
			}
		},
	}
});

import { defineStore } from 'pinia';
import { MAX_USER_SELECT, STORE_ITEMS_NAME } from '../core/config';

export const useItemsStore = defineStore('itemsStore', {
    state: () => {
        return {
            clothing: {
                user: [],
                all: []
            },
            selected: {
                user: [],
                all: null
            },
            isLoaded: false
        }
    },
    actions: {
        async get() {
            try {
                this.loadLocalStorage();

                if (!this.clothing.user.length && !this.clothing.all.length) {
                    const [user,all] = await Promise.all([fetch('./json/user.json').then(res => res.json()), fetch('./json/clothers.json').then(res => res.json())]);

                    this.clothing.user = user;
                    this.clothing.all = all;
                }
            } catch (error) {
                console.error('Error: ', error);
            } finally {
                this.isLoaded = true;
            }
        },
        selectItem(item, category) {
            if (!item || !category) return false;

            switch (category) {
                case 'user':
                    if (this.selected[category].length < MAX_USER_SELECT) this.toMove(item, category);
                    break;
                case 'all':
                    if (this.selected[category]) this.clothing[category].push(this.selected[category]);
                    this.toMove(item, category);
                    break;
            }

            this.updateLocalStorage();
        },
        unSelectItem(item, category) {
            if (Array.isArray(this.selected[category]))
                this.selected[category] = this.selected[category].filter(i => i.id !== item.id);
            else
                this.selected[category] = null;
            
            this.clothing[category].push(item);

            this.updateLocalStorage();
        },
        toMove(item, category) {
            if (Array.isArray(this.selected[category]))
                this.selected[category].push(item);
            else
                this.selected[category] = item;           
            
            this.clothing[category] = this.clothing[category].filter(i => i.id !== item.id);
        },
        loadLocalStorage() {
            const localStorageItems = localStorage.getItem(STORE_ITEMS_NAME);

            if (localStorageItems) {
                const items = JSON.parse(localStorageItems);

                this.selected.user = items.selected.user;
                this.selected.all = items.selected.all;
                this.clothing.user = items.clothing.user;
                this.clothing.all = items.clothing.all;
            }
        },
        updateLocalStorage() {
            const items = {
                clothing: {...this.clothing},
                selected: {...this.selected},
            }
            
            const localStorageItems = JSON.stringify(items);

            localStorage.setItem(STORE_ITEMS_NAME, localStorageItems);
        }
    }
});

import { toggleSelection, selectSingle } from '@/utils/selectionUtils';

export default {
  methods: {
    toggleSelection(list, item, max) {
      return toggleSelection(list, item, max);
    },
    selectSingle(singleItem, item) {
      return selectSingle(singleItem, item);
    },
  },
};

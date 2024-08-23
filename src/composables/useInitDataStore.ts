import { provide, reactive, ref } from "vue"
import { defaultChooseItems, defaultUserItems } from "../constants/data"
import { chooseItemsKey, selectedChooseItemsKey, selectedUsersItemsKey, userItemsKey } from "../constants/dataKeys"

export const useInitDataStore = () => {
  /**
   * TODO: возможно стоило использовать какой-будь store, вроде Pinia,
   * но для одностраничного приложения не вижу смысла
   */

  const userItems = reactive(defaultUserItems)
  const chooseItems = reactive(defaultChooseItems)

  const selectedUserItems = ref(Array<number>())
  const selectedChooseItems = ref(Array<number>())

  provide(userItemsKey, userItems)
  provide(chooseItemsKey, chooseItems)
  provide(selectedUsersItemsKey, selectedUserItems)
  provide(selectedChooseItemsKey, selectedChooseItems)

}
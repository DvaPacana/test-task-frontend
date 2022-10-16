import leftsideItems from './leftsideItems.json'
import rightsideItems from './rightsideItems.json'

export const itemsApi = {
  getLeftsideItems() {
    return Promise.resolve(leftsideItems)
  },
  getRighttsideItems() {
    return Promise.resolve(rightsideItems)
  },
}

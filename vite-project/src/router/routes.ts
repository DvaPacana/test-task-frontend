import { NotFoundPage } from "../pages/notFound";
import { CatalogPage } from '../pages/catalog'

export default [
  {
    path: '/',
    component: CatalogPage,
    name: 'CatalogPage'
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: 'NotFoundPage'
  }
]
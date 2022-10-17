import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: 'active',
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach(async (to, from, next) => {
  // const isLoggedIn = localStorage.getItem('isLoggedIn');
  const isLoggedIn = true;
  if (to.meta['title']) {
    document.title = to.meta['title'];
    let description = document.querySelector('head meta[name="description"]');
    if (description && to.meta['description']) description.setAttribute('content', to.meta['description']);
  }

  if (to.name === 'login' && isLoggedIn) next({ name: 'admin' });

  /*check login*/

  if (!isLoggedIn && to.name !== 'login') next({ name: 'login' });
  else next();
});

export default router;

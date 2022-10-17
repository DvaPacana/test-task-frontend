export default [
  {
    path: '/',
    component: () => import('../../views/Index'),
    name: 'home',
    meta: {
      title: 'Главная',
    },
  },
];

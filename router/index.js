// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  
  // Route 404
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL,
  routes,
});

export default router;



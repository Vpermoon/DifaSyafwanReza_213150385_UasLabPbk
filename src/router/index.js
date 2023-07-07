import { createRouter, createWebHistory } from 'vue-router';

import Cuaca from '../components/cuaca.vue';
import Game from '../components/game.vue';
import Foto from '../components/foto.vue';
import Stopwatch from '../components/stopwatch.vue';

const routes = [
  { path: '/', component: Foto },
  { path: '/widgetscuaca', component: Cuaca },
  { path: '/widgetsstopwatch', component: Stopwatch},
  { path: '/widgetsgame', component: Game},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
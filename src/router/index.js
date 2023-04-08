import { createRouter, createWebHistory } from 'vue-router';
import StaticPage from '../components/StaticPage.vue';
import Message from '../views/Message.vue';
import My from '../views/My.vue';
import CertificationCenter from '../views/CertificationCenter.vue';
import UnlockedInfo from '../views/UnlockedInfo.vue';
import Favorites from '../views/Favorites.vue';
import OfficialGroup from '../views/OfficialGroup.vue';
import Settings from '../views/Settings.vue';

const routes = [
  {
    path: '/',
    name: 'StaticPage',
    component: StaticPage,
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/my',
    name: 'My',
    component: My,
  },
  {
    path: '/certification-center',
    name: 'CertificationCenter',
    component: CertificationCenter,
  },
  {
    path: '/unlocked-info',
    name: 'UnlockedInfo',
    component: UnlockedInfo,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  },
  {
    path: '/official-group',
    name: 'OfficialGroup',
    component: OfficialGroup,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

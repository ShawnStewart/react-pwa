import { RxChatBubble, RxCheckCircled, RxGithubLogo, RxHome, RxImage } from 'react-icons/rx';

import { asyncComponentLoader } from '@/utils/loader';

import type { Routes } from './types';
import { Pages } from './types';

export const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/Welcome'),
    }),
    icon: RxHome,
    path: '/',
    title: 'Welcome',
  },
  [Pages.Page1]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/BlankPage'),
    }),
    icon: RxGithubLogo,
    path: '/page-1',
    title: 'Page 1',
  },
  [Pages.Page2]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/BlankPage'),
      loadComponentProps: {
        pageNumber: 2,
      },
    }),
    icon: RxCheckCircled,
    path: '/page-2',
    title: 'Page 2',
  },
  [Pages.Page3]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/BlankPage'),
      loadComponentProps: {
        pageNumber: 3,
        show404: true,
      },
    }),
    icon: RxImage,
    path: '/page-3',
    title: 'Page 3',
  },
  [Pages.Page4]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/BlankPage'),
      loadComponentProps: {
        pageNumber: 4,
        show404: true,
      },
    }),
    icon: RxChatBubble,
    path: '/page-4',
    title: 'Page 4',
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/NotFound'),
    }),
    path: '*',
  },
};

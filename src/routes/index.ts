import {
  ChatBubbleIcon,
  CheckCircledIcon,
  GitHubLogoIcon,
  HomeIcon,
  ImageIcon,
} from '@radix-ui/react-icons';

import { asyncComponentLoader } from '@/utils/loader';

import type { Routes } from './types';
import { Pages } from './types';

export const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader({
      loadComponentAsync: async () => {
        // await new Promise((res) => setTimeout(res, 1000000));
        // if (Math.random() > 0.25) throw new Error('oops');
        return import('@/pages/Welcome');
      },
    }),
    path: '/',
    title: 'Welcome',
    icon: HomeIcon,
  },
  [Pages.Page1]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/Page1'),
    }),
    path: '/page-1',
    title: 'Page 1',
    icon: GitHubLogoIcon,
  },
  [Pages.Page2]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/Page2'),
    }),
    path: '/page-2',
    title: 'Page 2',
    icon: CheckCircledIcon,
  },
  [Pages.Page3]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/Page3'),
    }),
    path: '/page-3',
    title: 'Page 3',
    icon: ImageIcon,
  },
  [Pages.Page4]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/Page4'),
    }),
    path: '/page-4',
    title: 'Page 4',
    icon: ChatBubbleIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader({
      loadComponentAsync: () => import('@/pages/NotFound'),
    }),
    path: '*',
  },
};

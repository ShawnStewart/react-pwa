import type { ComponentType } from 'react';
import type { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

import type { ComponentTypeAny } from '@/utils/loader/types';

enum Pages {
  Welcome,
  Page1,
  Page2,
  Page3,
  Page4,
  NotFound,
}

interface PathRouteCustomProps {
  title?: string;
  component: ComponentTypeAny;
  icon?: ComponentType<SvgIconProps>;
}

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };

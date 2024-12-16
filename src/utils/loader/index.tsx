import type { ComponentProps, ComponentType, FunctionComponent } from 'react';

import Loading from '@/components/Loading';
import { loaderDefaultOptions } from '@/config';

import asyncComponentLoader from './loader';
import type { LoadComponentAsync, LoaderOptions } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function configuredAsyncComponentLoader<C extends ComponentType<any>>(
  loadComponent: LoadComponentAsync<C>,
  additionalProps: ComponentProps<C>,
  loaderOptions: LoaderOptions = loaderDefaultOptions,
  FallbackWaiting: FunctionComponent = Loading,
) {
  return asyncComponentLoader(loadComponent, additionalProps, loaderOptions, FallbackWaiting);
}

export { loaderDefaultOptions };
export default configuredAsyncComponentLoader;

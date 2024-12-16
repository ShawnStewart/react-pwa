import Loading from '@/components/Loading';
import { loaderDefaultOptions } from '@/config';

import asyncComponentLoader from './loader';
import type { AnyProps, LoadComponent, LoaderOptions } from './types';

const configuredAsyncComponentLoader = (
  loadComponent: LoadComponent,
  additionalProps: AnyProps = {},
  loaderOptions: LoaderOptions = loaderDefaultOptions,
  FallbackWaiting = Loading,
) => asyncComponentLoader(loadComponent, additionalProps, loaderOptions, FallbackWaiting);

export { loaderDefaultOptions };
export default configuredAsyncComponentLoader;

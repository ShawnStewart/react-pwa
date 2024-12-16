import type { ComponentType } from 'react';

interface LoaderOptions {
  delay: number;
  minimumLoading: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LoadComponentAsync<C extends ComponentType<any>> = () => Promise<{ default: C }>;

export type { LoaderOptions, LoadComponentAsync };

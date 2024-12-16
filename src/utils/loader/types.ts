/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from 'react';

type LoaderOptions = {
  delay: number;
  minimumLoading: number;
};

type LoadComponent = () => Promise<{ default: ComponentType<any> }>;

type AnyProps = {
  [key: string]: any;
};

export type { LoaderOptions, LoadComponent, AnyProps };

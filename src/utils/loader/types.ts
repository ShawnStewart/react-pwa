/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from 'react';

type LoaderOptions = {
  delay: number;
  minimumLoading: number;
};

type LoadComponent = () => Promise<{ default: ComponentType<any> }>;

type AnyProps = {
  [key: string]: any;
};

export type { LoaderOptions, LoadComponent, AnyProps };

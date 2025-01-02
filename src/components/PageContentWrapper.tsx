import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { Box } from './layout';

export function PageContentWrapper({ children, className, ...props }: ComponentProps<typeof Box>) {
  return (
    <Box className={cn('container flex-grow bg-background text-foreground', className)} {...props}>
      {children}
    </Box>
  );
}

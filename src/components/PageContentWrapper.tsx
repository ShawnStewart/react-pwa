import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function PageContentWrapper({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('container flex-grow bg-background text-foreground', className)} {...props}>
      {children}
    </div>
  );
}

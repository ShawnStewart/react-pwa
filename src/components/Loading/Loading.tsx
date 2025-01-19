import { LuLoaderCircle } from 'react-icons/lu';

import { cn } from '@/lib/utils';

import { PageContentWrapper } from '../PageContentWrapper';

export function Loading({ className }: { className?: string }) {
  return (
    <PageContentWrapper className="flex items-center justify-center">
      <LuLoaderCircle className={cn('h-10 w-10 animate-spin', className)} />
    </PageContentWrapper>
  );
}

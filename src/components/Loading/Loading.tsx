import { LoaderCircle } from 'lucide-react';

import { FullSizeCenteredFlexBox } from '@/components/layout';
import { cn } from '@/lib/utils';

export function Loading({ className }: { className?: string }) {
  return (
    <FullSizeCenteredFlexBox>
      <LoaderCircle className={cn('h-10 w-10 animate-spin', className)} />
    </FullSizeCenteredFlexBox>
  );
}

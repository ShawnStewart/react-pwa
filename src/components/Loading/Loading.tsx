import { LoaderCircle } from 'lucide-react';

import { FullSizeCenteredFlexBox } from '@/components/layout';
import { cn } from '@/lib/utils';

export function Loading({ className }: { className?: string }) {
  return (
    <FullSizeCenteredFlexBox>
      <LoaderCircle className={cn('animate-spin w-10 h-10', className)} />
    </FullSizeCenteredFlexBox>
  );
}

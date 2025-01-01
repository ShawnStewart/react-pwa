import { clsx } from 'clsx';
import type { ComponentProps, HTMLAttributes } from 'react';

export function Box({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function FlexBox({ children, className, ...props }: ComponentProps<typeof Box>) {
  return (
    <Box className={clsx('flex', className)} {...props}>
      {children}
    </Box>
  );
}

export function CenteredFlexBox({ children, className, ...props }: ComponentProps<typeof FlexBox>) {
  return (
    <FlexBox className={clsx('items-center justify-center', className)} {...props}>
      {children}
    </FlexBox>
  );
}

export function FullSizeCenteredFlexBox({
  children,
  className,
  ...props
}: ComponentProps<typeof CenteredFlexBox>) {
  return (
    <CenteredFlexBox className={clsx('h-full w-full', className)} {...props}>
      {children}
    </CenteredFlexBox>
  );
}

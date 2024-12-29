import type { HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

function TypographyH1({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h1
      className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
      {...props}
    >
      {children}
    </h1>
  );
}

function TypographyH2({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

function TypographyH3({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h3>
  );
}

function TypographyH4({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h4>
  );
}

function TypographyP({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
      {children}
    </p>
  );
}

function TypographyBlockquote({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLQuoteElement>>) {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props}>
      {children}
    </blockquote>
  );
}

function TypographyInlineCode({ children }: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      )}
    >
      {children}
    </code>
  );
}

function TypographyLead({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p className={cn('text-xl text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}

interface TypographyProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'inline-code' | 'lead';
}

export function Typography({ children, variant, ...props }: TypographyProps) {
  switch (variant) {
    case 'h1':
      return <TypographyH1 {...props}>{children}</TypographyH1>;
    case 'h2':
      return <TypographyH2 {...props}>{children}</TypographyH2>;
    case 'h3':
      return <TypographyH3 {...props}>{children}</TypographyH3>;
    case 'h4':
      return <TypographyH4 {...props}>{children}</TypographyH4>;
    case 'p':
      return <TypographyP {...props}>{children}</TypographyP>;
    case 'blockquote':
      return <TypographyBlockquote {...props}>{children}</TypographyBlockquote>;
    case 'inline-code':
      return <TypographyInlineCode {...props}>{children}</TypographyInlineCode>;
    case 'lead':
      return <TypographyLead {...props}>{children}</TypographyLead>;
    default:
      return <TypographyP {...props}>{children}</TypographyP>;
  }
}

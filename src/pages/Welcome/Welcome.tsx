import type { JSX } from 'react';

import { Meta } from '@/components/Meta';
import { PageContentWrapper } from '@/components/PageContentWrapper';
import { useTheme } from '@/components/ui/theme';
import { cn } from '@/lib/utils';

import pwaLogo from './logos/pwa.svg';
import reactLogo from './logos/react.svg';
import reactRouterLogo from './logos/react-router.svg';
import recoilLogo from './logos/recoil.svg';
import shadcnLogo from './logos/shadcn.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';

function Logo({ className, ...props }: JSX.IntrinsicElements['img']) {
  return (
    <img
      className={cn('max-h-[12%] max-w-[12%] flex-1 p-2 sm:max-h-[10%] sm:max-w-[10%]', className)}
      {...props}
    />
  );
}

export function Welcome() {
  const { theme } = useTheme();

  return (
    <PageContentWrapper className="flex flex-col justify-center">
      <Meta title="Welcome" />
      <section className="flex flex-col items-center justify-between gap-y-8 py-4 sm:flex-row">
        <Logo alt="react-router" src={reactRouterLogo} />
        <Logo alt="vite" src={viteLogo} />
        <Logo alt="typescript" src={tsLogo} />
        <Logo
          alt="react"
          className="max-h-[35%] max-w-[35%] sm:max-h-[35%] sm:max-w-[35%]"
          src={reactLogo}
        />
        <Logo alt="shadcn" className={cn(theme === 'dark' && 'invert filter')} src={shadcnLogo} />
        <Logo alt="recoil" src={recoilLogo} />
        <Logo alt="pwa" src={pwaLogo} />
      </section>
    </PageContentWrapper>
  );
}

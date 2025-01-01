import type { JSX } from 'react';

import { FullSizeCenteredFlexBox } from '@/components/layout';
import { Meta } from '@/components/Meta';
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
  return <img className={cn('max-h-[14%] max-w-[14%] flex-1 p-2', className)} {...props} />;
}

export function Welcome() {
  const { theme } = useTheme();

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox className="container flex-col justify-between gap-y-8 py-4 sm:flex-row">
        <Logo alt="react-router" src={reactRouterLogo} />
        <Logo alt="vite" src={viteLogo} />
        <Logo alt="typescript" src={tsLogo} />
        <Logo
          alt="react"
          className="max-h-[25%] max-w-[25%] md:max-h-[40%] md:max-w-[40%]"
          src={reactLogo}
        />
        <Logo alt="shadcn" className={cn(theme === 'dark' && 'invert filter')} src={shadcnLogo} />
        <Logo alt="recoil" src={recoilLogo} />
        <Logo alt="pwa" src={pwaLogo} />

        <Logo alt="react-router" src={reactRouterLogo} />
        <Logo alt="vite" src={viteLogo} />
        <Logo alt="typescript" src={tsLogo} />
        <Logo
          alt="react"
          className="max-h-[25%] max-w-[25%] md:max-h-[40%] md:max-w-[40%]"
          src={reactLogo}
        />
        <Logo alt="shadcn" className={cn(theme === 'dark' && 'invert filter')} src={shadcnLogo} />
        <Logo alt="recoil" src={recoilLogo} />
        <Logo alt="pwa" src={pwaLogo} />
      </FullSizeCenteredFlexBox>
    </>
  );
}

import { FullSizeCenteredFlexBox } from '@/components/layout';
import { Meta } from '@/components/Meta';
import { cn } from '@/lib/utils';
import { useTheme } from '@/store/theme';
import { Themes } from '@/theme/types';

import pwaLogo from './logos/pwa.svg';
import reactLogo from './logos/react.svg';
import reactRouterLogo from './logos/react-router.svg';
import recoilLogo from './logos/recoil.svg';
import shadcnLogo from './logos/shadcn.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';

function Logo({ className, ...props }: JSX.IntrinsicElements['img']) {
  return <img className={cn('flex-1 max-w-[10%] max-h-[10%] p-2', className)} {...props} />;
}

export function Welcome() {
  const [theme] = useTheme();

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox className="flex-col gap-y-8 py-4 sm:flex-row justify-between container mx-auto">
        <Logo alt="react-router" src={reactRouterLogo} />
        <Logo alt="vite" src={viteLogo} />
        <Logo alt="typescript" src={tsLogo} />
        <Logo
          alt="react"
          src={reactLogo}
          className="max-w-[25%] max-h-[25%] md:max-w-[40%] md:max-h-[40%]"
        />
        <Logo
          alt="shadcn"
          className={cn(theme === Themes.DARK && 'filter invert')}
          src={shadcnLogo}
        />
        <Logo alt="recoil" src={recoilLogo} />
        <Logo alt="pwa" src={pwaLogo} />
      </FullSizeCenteredFlexBox>
    </>
  );
}

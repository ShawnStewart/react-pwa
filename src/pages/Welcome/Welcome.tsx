import { clsx } from 'clsx';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/layout';
import useOrientation from '@/hooks/useOrientation';

import muiLogo from './logos/mui.svg';
import pwaLogo from './logos/pwa.svg';
import reactLogo from './logos/react_ed.svg';
import recoilLogo from './logos/recoil.svg';
import rrLogo from './logos/rr.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';
import { Image } from './styled';

function Welcome() {
  const isPortrait = useOrientation();

  const widthStyles = isPortrait ? 'w-[40%]' : 'w-[30%]';
  const heightStyles = isPortrait ? 'h-[30%]' : 'h-[40%]';

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox className={clsx(isPortrait && 'flex-col')}>
        <Image alt="react-router" src={rrLogo} />
        <Image alt="vite" src={viteLogo} />
        <Image alt="typescript" src={tsLogo} />
        <Image alt="react" src={reactLogo} className={clsx(widthStyles, heightStyles)} />
        <Image alt="mui" src={muiLogo} />
        <Image alt="recoil" src={recoilLogo} />
        <Image alt="pwa" src={pwaLogo} />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;

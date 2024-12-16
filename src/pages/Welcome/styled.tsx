import type { JSX } from 'react';

import clsx from 'clsx';

function Image({ className, ...props }: JSX.IntrinsicElements['img']) {
  return <img className={clsx('w-[10%] h-[10%] m-1', className)} {...props} />;
}

export { Image };

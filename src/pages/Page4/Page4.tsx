import { Link } from 'react-router-dom';

import { FullSizeCenteredFlexBox } from '@/components/layout';
import { Meta } from '@/components/Meta';
import { buttonVariants } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export function Page4() {
  return (
    <>
      <Meta title="page 4" />
      <FullSizeCenteredFlexBox className="flex-col">
        <Typography variant="h3">Page 4</Typography>
        <Link
          className={buttonVariants({ className: 'my-8', size: 'sm', variant: 'outline' })}
          to={`/${Math.random().toString()}`}
        >
          Want to check 404?
        </Link>
      </FullSizeCenteredFlexBox>
    </>
  );
}

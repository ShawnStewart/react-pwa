import { Link } from 'react-router-dom';

import { Meta } from '@/components/Meta';
import { PageContentWrapper } from '@/components/PageContentWrapper';
import { buttonVariants } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export function Page4() {
  return (
    <PageContentWrapper className="flex items-center justify-center">
      <Meta title="page 4" />
      <section className="flex-col">
        <Typography className="text-center" variant="heading">
          Page 4
        </Typography>
        <Link
          className={buttonVariants({ className: 'my-8', size: 'sm', variant: 'outline' })}
          to={`/${Math.random().toString()}`}
        >
          Want to check 404?
        </Link>
      </section>
    </PageContentWrapper>
  );
}

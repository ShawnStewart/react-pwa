import { Meta } from '@/components/Meta';
import { PageContentWrapper } from '@/components/PageContentWrapper';
import { HeadingLevel, Typography } from '@/components/ui/typography';

import { TechCards } from './TechCards';

export function Welcome() {
  return (
    <PageContentWrapper className="flex flex-col justify-center text-center">
      <Meta title="Welcome" />
      <Typography variant="heading">Build a modern web application</Typography>
      <Typography>Get started quickly using this template.</Typography>

      <section className="mt-4 flex flex-wrap justify-center gap-4 sm:flex-row">
        <HeadingLevel>
          <TechCards />
        </HeadingLevel>
      </section>
    </PageContentWrapper>
  );
}

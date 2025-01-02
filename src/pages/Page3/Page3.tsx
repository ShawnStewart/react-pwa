import { Meta } from '@/components/Meta';
import { PageContentWrapper } from '@/components/PageContentWrapper';
import { Typography } from '@/components/ui/typography';

export function Page3() {
  return (
    <PageContentWrapper className="flex items-center justify-center">
      <Meta title="page 3" />
      <section>
        <Typography variant="heading">Page 3</Typography>
      </section>
    </PageContentWrapper>
  );
}

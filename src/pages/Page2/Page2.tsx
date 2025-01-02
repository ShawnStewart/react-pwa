import { Meta } from '@/components/Meta';
import { PageContentWrapper } from '@/components/PageContentWrapper';
import { Typography } from '@/components/ui/typography';

export function Page2() {
  return (
    <PageContentWrapper className="flex items-center justify-center">
      <Meta title="page 2" />
      <section>
        <Typography variant="h3">Page 2</Typography>
      </section>
    </PageContentWrapper>
  );
}

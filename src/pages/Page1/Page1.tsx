import { Meta } from '@/components/Meta';
import { PageContentWrapper } from '@/components/PageContentWrapper';
import { Typography } from '@/components/ui/typography';

export function Page1() {
  return (
    <PageContentWrapper className="flex items-center justify-center">
      <Meta title="page 1" />
      <section>
        <Typography variant="h3">Page 1</Typography>
      </section>
    </PageContentWrapper>
  );
}

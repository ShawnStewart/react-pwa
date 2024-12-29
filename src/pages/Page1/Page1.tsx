import { FullSizeCenteredFlexBox } from '@/components/layout';
import { Meta } from '@/components/Meta';
import { Typography } from '@/components/ui/typography';

export function Page1() {
  return (
    <>
      <Meta title="page 1" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Page 1</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

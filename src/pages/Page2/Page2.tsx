import Typography from '@mui/material/Typography';

import { FullSizeCenteredFlexBox } from '@/components/layout';
import { Meta } from '@/components/Meta';

export function Page2() {
  return (
    <>
      <Meta title="page 2" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Page 2</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

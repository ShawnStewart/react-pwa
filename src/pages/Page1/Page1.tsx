import Typography from '@mui/material/Typography';

import { FullSizeCenteredFlexBox } from '@/components/layout';
import { Meta } from '@/components/Meta';

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

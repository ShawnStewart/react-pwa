import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { FullSizeCenteredFlexBox } from '@/components/layout';
import { Meta } from '@/components/Meta';

export function Page4() {
  return (
    <>
      <Meta title="page 4" />
      <FullSizeCenteredFlexBox className="flex-col">
        <Typography variant="h3">Page 4</Typography>
        <Button
          to={`/${Math.random().toString()}`}
          component={Link}
          variant="outlined"
          sx={{ mt: 4 }}
          size="small"
          color="warning"
        >
          Whant to check 404?
        </Button>
      </FullSizeCenteredFlexBox>
    </>
  );
}

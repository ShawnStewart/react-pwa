import Typography from '@mui/material/Typography';

import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/components/layout';
import { Separator } from '@/components/ui/separator';
import { giphy404, messages } from '@/config';

export function NotFound() {
  return (
    <FullSizeCenteredFlexBox className="container mx-auto flex-col">
      <iframe
        src={giphy404}
        width="100%"
        height="50%"
        style={{ maxHeight: '60%', maxWidth: '100%' }}
        allowFullScreen
      />
      <CenteredFlexBox className="flex-col items-center">
        <Typography sx={{ mt: 2 }} variant="h4" color="error">
          404 Not Found
        </Typography>
        <Separator className="w-4/5 my-3" />
        <Typography variant="h4" sx={{ color: (theme) => theme.palette.info.main }}>
          {messages[404]}
        </Typography>
      </CenteredFlexBox>
    </FullSizeCenteredFlexBox>
  );
}

import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/components/layout';
import { Separator } from '@/components/ui/separator';
import { Typography } from '@/components/ui/typography';
import { giphy404, messages } from '@/config';

export function NotFound() {
  return (
    <FullSizeCenteredFlexBox className="container flex-col">
      <iframe
        allowFullScreen
        height="50%"
        src={giphy404}
        style={{ maxHeight: '60%', maxWidth: '100%' }}
        width="100%"
      />
      <CenteredFlexBox className="flex-col items-center px-4">
        <Typography className="mt-2" color="error" variant="h4">
          404 Not Found
        </Typography>
        <Separator className="my-3 w-4/5" />
        <Typography variant="h4">{messages[404]}</Typography>
      </CenteredFlexBox>
    </FullSizeCenteredFlexBox>
  );
}

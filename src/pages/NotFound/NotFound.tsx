import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/components/layout';
import { Separator } from '@/components/ui/separator';
import { Typography } from '@/components/ui/typography';
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
      <CenteredFlexBox className="flex-col items-center px-4">
        <Typography className="mt-2" variant="h4" color="error">
          404 Not Found
        </Typography>
        <Separator className="w-4/5 my-3" />
        <Typography variant="h4">{messages[404]}</Typography>
      </CenteredFlexBox>
    </FullSizeCenteredFlexBox>
  );
}

import { PageContentWrapper } from '@/components/PageContentWrapper';
import { Separator } from '@/components/ui/separator';
import { Typography } from '@/components/ui/typography';
import { giphy404, messages } from '@/config';

export function NotFound() {
  return (
    <PageContentWrapper className="flex max-w-sm flex-col items-center justify-center">
      <iframe allowFullScreen className="aspect-square size-full" src={giphy404} />
      <Typography className="mt-2" color="error" variant="h4">
        404 Not Found
      </Typography>
      <Separator className="my-3" />
      <Typography variant="h4">{messages[404]}</Typography>
    </PageContentWrapper>
  );
}

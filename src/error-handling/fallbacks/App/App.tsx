import { LuMailWarning, LuRotateCcw } from 'react-icons/lu';

import { PageContentWrapper } from '@/components/PageContentWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { email, messages } from '@/config';
import { cn } from '@/lib/utils';
import { resetApp } from '@/utils/reset-app';

export function AppErrorBoundaryFallback() {
  return (
    <PageContentWrapper className="flex flex-col items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>{messages.app.crash.title}</CardTitle>
          <CardDescription>{messages.app.crash.description}</CardDescription>
        </CardHeader>
        <CardFooter className="items-stretch justify-between gap-x-4">
          <a
            className={cn(
              buttonVariants({
                className: 'h-auto w-1/2 text-wrap',
                variant: 'outline',
              }),
            )}
            href={`mailto:${email}`}
            rel="noreferrer"
            target="_blank"
          >
            <LuMailWarning /> {messages.app.crash.options.email}
          </a>
          <Button className="h-auto w-1/2 text-wrap" onClick={resetApp} variant="outline">
            <LuRotateCcw /> {messages.app.crash.options.reset}
          </Button>
        </CardFooter>
      </Card>
    </PageContentWrapper>
  );
}

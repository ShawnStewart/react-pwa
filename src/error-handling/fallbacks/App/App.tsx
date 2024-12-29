import { MailWarning, RotateCcw } from 'lucide-react';

import { FullSizeCenteredFlexBox } from '@/components/layout';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { email, messages } from '@/config';
import { cn } from '@/lib/utils';
import { resetApp } from '@/utils/reset-app';

export function AppErrorBoundaryFallback() {
  return (
    <FullSizeCenteredFlexBox className="h-screen">
      <Card>
        <CardHeader>
          <CardTitle>{messages.app.crash.title}</CardTitle>
          <CardDescription>{messages.app.crash.description}</CardDescription>
        </CardHeader>
        <CardFooter className="items-center justify-between gap-x-4">
          <a
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
            )}
            target="_blank"
            rel="noreferrer"
            href={`mailto:${email}`}
          >
            <MailWarning /> {messages.app.crash.options.email}
          </a>
          <Button variant="outline" onClick={resetApp}>
            <RotateCcw /> {messages.app.crash.options.reset}
          </Button>
        </CardFooter>
      </Card>
    </FullSizeCenteredFlexBox>
  );
}

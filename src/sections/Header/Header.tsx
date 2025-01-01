import { FlexBox } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { title } from '@/config';
import { useNotifications } from '@/store/notifications';

import { GitHubLink } from './GitHubLink';
import { HeaderDrawer } from './HeaderDrawer/HeaderDrawer';
import { HeaderHotkeysDialog } from './HeaderHotkeys/HeaderHotkeys';
import { ThemeToggle } from './ThemeToggle';
import { getRandomJoke } from './utils';

export function Header() {
  const [, notificationsActions] = useNotifications();

  function showNotification() {
    notificationsActions.push({
      options: {
        // Show fully customized notification
        // Usually, to show a notification, you'll use something like this:
        // notificationsActions.push({ message: ... })
        // `message` accepts string as well as ReactNode
        // If you want to show a fully customized notification, you can define
        // your own `variant`s, see @/sections/Notifications/Notifications.tsx
        variant: 'customNotification',
      },
      title: 'Notification demo (random IT jokes)',
      message: getRandomJoke(),
    });
  }

  return (
    <header className="sticky top-0 z-50 min-h-12 border-b bg-background/95 text-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:min-h-16">
      <div className="container flex justify-between">
        <FlexBox className="items-center gap-2">
          <HeaderDrawer />
          <Button
            className="focus-visible:ring-cyan-600"
            onClick={showNotification}
            variant="ghost"
          >
            {title}
          </Button>
        </FlexBox>

        <FlexBox className="items-center gap-2 py-3">
          <HeaderHotkeysDialog />
          <Separator orientation="vertical" />

          <GitHubLink />
          <Separator orientation="vertical" />

          <ThemeToggle />
        </FlexBox>
      </div>
    </header>
  );
}

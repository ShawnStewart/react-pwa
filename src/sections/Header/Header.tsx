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
      message: getRandomJoke(),
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
    });
  }

  return (
    <header className="sticky top-0 z-50 mb-4 min-h-12 border-b bg-background/95 text-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:min-h-16">
      <div className="container flex justify-between">
        <div className="flex items-center gap-2">
          <HeaderDrawer />
          <Button
            className="focus-visible:ring-cyan-600"
            onClick={showNotification}
            variant="ghost"
          >
            {title}
          </Button>
        </div>

        <div className="flex items-center gap-2 py-3">
          <HeaderHotkeysDialog />
          <Separator orientation="vertical" />

          <GitHubLink />
          <Separator orientation="vertical" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

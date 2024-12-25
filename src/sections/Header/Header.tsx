import { BlendingModeIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

import { FlexBox } from '@/components/layout';
import { Button as ShadButton, buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { repository, title } from '@/config';
import { cn } from '@/lib/utils';
import { useHotKeysDialog } from '@/store/hotkeys';
import { useNotifications } from '@/store/notifications';
import { useTheme } from '@/store/theme';

import { HeaderDrawer } from '../HeaderDrawer/HeaderDrawer';
import { getRandomJoke } from './utils';

export function Header() {
  const [, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [, hotKeysDialogActions] = useHotKeysDialog();

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
      message: getRandomJoke(),
    });
  }

  return (
    <FlexBox className="justify-between px-6 min-h-12 sm:min-h-16">
      <FlexBox className="items-center">
        <HeaderDrawer />
        <ShadButton
          className="focus-visible:ring-cyan-600"
          onClick={showNotification}
          variant="ghost"
        >
          {title}
        </ShadButton>
      </FlexBox>
      <FlexBox className="items-center gap-4 py-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <ShadButton
              aria-label="Open hotkeys dialog"
              className="bg-transparent focus-visible:ring-cyan-600"
              onClick={hotKeysDialogActions.open}
              size="sm"
              variant="outline"
            >
              alt + k
            </ShadButton>
          </TooltipTrigger>
          <TooltipContent side="bottom">Hot keys</TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" />
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className={cn(
                buttonVariants({
                  className: 'rounded-full focus-visible:ring-cyan-600 [&_svg]:size-6',
                  size: 'icon',
                  variant: 'ghost',
                }),
              )}
              to={repository}
              target="_blank"
            >
              <GitHubLogoIcon />
            </Link>
          </TooltipTrigger>
          <TooltipContent>{"It's open source"}</TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" />
        <Tooltip>
          <TooltipTrigger asChild>
            <ShadButton
              className="rounded-full focus-visible:ring-cyan-600 [&_svg]:size-6"
              data-pw="theme-toggle"
              onClick={themeActions.toggle}
              size="icon"
              variant="ghost"
            >
              <BlendingModeIcon />
            </ShadButton>
          </TooltipTrigger>
          <TooltipContent>Switch theme</TooltipContent>
        </Tooltip>
      </FlexBox>
    </FlexBox>
  );
}

import { Link, useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { title } from '@/config';
import { useNotifications } from '@/store/notifications';

import { getRandomJoke } from './utils';

export function AppTitle() {
  const { pathname } = useLocation();
  const [, notificationsActions] = useNotifications();

  const isHomePage = pathname === '/';

  function showNotification() {
    if (!isHomePage) return;

    notificationsActions.push({
      message: getRandomJoke(),
      options: {
        variant: 'customNotification',
      },
      title: 'Notification demo (random IT jokes)',
    });
  }

  const button = (
    <Button className="focus-visible:ring-cyan-600" onClick={showNotification} variant="ghost">
      {title}
    </Button>
  );

  return isHomePage ? button : <Link to="/">{button}</Link>;
}

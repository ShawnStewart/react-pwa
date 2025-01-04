import { Link, useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { title } from '@/config';
import { useToast } from '@/hooks/useToast';

import { getRandomJoke } from './utils';

export function AppTitle() {
  const { pathname } = useLocation();
  const { toast } = useToast();

  const isHomePage = pathname === '/';

  function showNotification() {
    if (!isHomePage) return;

    toast({
      description: getRandomJoke(),
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

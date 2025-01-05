import { Separator } from '@/components/ui/separator';

import { AppTitle } from './AppTitle';
import { GitHubLink } from './GitHubLink';
import { HeaderDrawer } from './HeaderDrawer/HeaderDrawer';
import { HeaderHotkeysDialog } from './HeaderHotkeys/HeaderHotkeys';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 min-h-12 border-b bg-background/95 text-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:min-h-16">
      <div className="container flex justify-between">
        <div className="flex items-center gap-2">
          <HeaderDrawer />

          <AppTitle />
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

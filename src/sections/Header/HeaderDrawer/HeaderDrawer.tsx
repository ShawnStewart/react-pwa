import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useHeaderDrawer } from '@/store/headerDrawer';

import { NavigationMenu } from './NavigationMenu';

export function HeaderDrawer() {
  const [isOpen, actions] = useHeaderDrawer();

  return (
    <Drawer autoFocus direction="left" open={isOpen} onOpenChange={actions.toggle}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          aria-label="menu"
          className="rounded-full focus-visible:ring-cyan-600"
          size="icon"
        >
          <HamburgerMenuIcon className="w-4 h-4" />
        </Button>
      </DrawerTrigger>

      <DrawerPortal>
        <DrawerOverlay className="bg-transparent" />
        <DrawerContent
          aria-describedby={undefined}
          className="text-foreground"
          direction="left"
          onEscapeKeyDown={actions.close}
          onPointerDownOutside={actions.close}
        >
          <VisuallyHidden asChild>
            <DrawerTitle>Navigation menu</DrawerTitle>
          </VisuallyHidden>

          <NavigationMenu onNavigationSelect={actions.close} />
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}

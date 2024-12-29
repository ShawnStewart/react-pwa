import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { useHotkeysConfig, useHotKeysDialog } from './useHotkeysConfig';

export function HeaderHotkeysDialog() {
  const hotkeysConfig = useHotkeysConfig();
  const [isOpen] = useHotKeysDialog();

  return (
    <Dialog open={isOpen} onOpenChange={hotkeysConfig.HOTKEYS_MENU.action}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              aria-label="Open hotkeys dialog"
              className="bg-transparent focus-visible:ring-cyan-600"
              size="sm"
              variant="outline"
            >
              {hotkeysConfig.HOTKEYS_MENU.key}
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom">Hot keys</TooltipContent>
      </Tooltip>

      <DialogContent aria-describedby={undefined} className="text-black">
        <DialogHeader>
          <DialogTitle>Hotkeys menu</DialogTitle>

          <ul className="flex flex-col gap-y-2">
            {Object.values(hotkeysConfig).map(({ action, description, key }) => (
              <li className="flex items-center justify-between" key={key}>
                <span>{description}</span>
                <Button size="sm" variant="outline" onClick={() => action()}>
                  {key}
                </Button>
              </li>
            ))}
          </ul>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

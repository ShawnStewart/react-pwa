import { BlendingModeIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useTheme } from '@/store/theme';

export function ThemeToggle() {
  const [, themeActions] = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="rounded-full focus-visible:ring-cyan-600 [&_svg]:size-6"
          data-pw="theme-toggle"
          onClick={themeActions.toggle}
          size="icon"
          variant="ghost"
        >
          <BlendingModeIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Switch theme</TooltipContent>
    </Tooltip>
  );
}

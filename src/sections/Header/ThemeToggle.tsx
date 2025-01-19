import { RxBlendingMode } from 'react-icons/rx';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/theme';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          aria-label="Theme toggle"
          className="rounded-full [&_svg]:size-6"
          onClick={toggleTheme}
          size="icon"
          variant="ghost"
        >
          <RxBlendingMode />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Switch theme</TooltipContent>
    </Tooltip>
  );
}

import { RxGithubLogo } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { repository } from '@/config';
import { cn } from '@/lib/utils';

export function GitHubLink() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          aria-label="GitHub repository"
          className={cn(
            buttonVariants({
              className: 'rounded-full [&_svg]:size-6',
              size: 'icon',
              variant: 'ghost',
            }),
          )}
          target="_blank"
          to={repository}
        >
          <RxGithubLogo />
        </Link>
      </TooltipTrigger>
      <TooltipContent>{"It's open source"}</TooltipContent>
    </Tooltip>
  );
}

import type { JSX } from 'react';

import packageJson from '@/../package.json';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useTheme } from '@/components/ui/theme';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

import pwaLogo from './logos/pwa.svg';
import reactLogo from './logos/react.svg';
import reactRouterLogo from './logos/react-router.svg';
import recoilLogo from './logos/recoil.svg';
import shadcnLogo from './logos/shadcn.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';

type TechCardProps = {
  dependencyKey?: string;
  description: string;
  title: string;
  learnMore: {
    label?: string;
    url: string;
  };
} & JSX.IntrinsicElements['img'];

const techCards: TechCardProps[] = [
  {
    dependencyKey: 'react',
    description: 'Building user interfaces with reusable components.',
    learnMore: { url: 'https://18.react.dev' },
    src: reactLogo,
    title: 'React',
  },
  {
    dependencyKey: 'react-router-dom',
    description: 'Routing and navigation in React.',
    learnMore: { url: 'https://reactrouter.com' },
    src: reactRouterLogo,
    title: 'React Router',
  },
  {
    dependencyKey: 'vite',
    description: 'Fast build tool and development server.',
    learnMore: { url: 'https://vite.dev' },
    src: viteLogo,
    title: 'Vite',
  },
  {
    dependencyKey: 'vite-plugin-pwa',
    description: 'Vite plugin that enables Progressive Web App (PWA) features.',
    learnMore: { label: 'Vite PWA plugin', url: 'https://vite-pwa-org.netlify.app' },
    src: pwaLogo,
    title: 'Progressive Web App',
  },
  {
    dependencyKey: 'typescript',
    description: 'A superset of JavaScript that adds static typing.',
    learnMore: { url: 'https://www.typescriptlang.org/docs' },
    src: tsLogo,
    title: 'TypeScript',
  },
  {
    description: 'A collection of accessible and customizable UI components.',
    learnMore: { url: 'https://ui.shadcn.com/docs' },
    src: shadcnLogo,
    title: 'shadcn/ui',
  },
  {
    dependencyKey: 'recoil',
    description: 'A state management library for React.',
    learnMore: { url: 'https://recoiljs.org' },
    src: recoilLogo,
    title: 'Recoil.js',
  },
] as const;

function getPackageVersion(key: string | undefined) {
  if (!key) return null;

  const { dependencies, devDependencies } = packageJson;
  let version: string | undefined = undefined;
  if (key in dependencies) version = dependencies[key as keyof typeof dependencies];
  else if (key in devDependencies) version = devDependencies[key as keyof typeof devDependencies];

  version = version?.replace(/\^|\~/g, '');
  return version ?? null;
}

function TechCard({
  className,
  dependencyKey,
  description,
  title,
  learnMore,
  ...props
}: TechCardProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const version = getPackageVersion(dependencyKey);
  const dependencyKeyAndVersion = version ? `${dependencyKey}@${version}` : '-';

  return (
    <Card
      className={cn(
        'relative z-10 flex max-w-[90%] flex-1 basis-1/2 flex-col overflow-hidden bg-transparent bg-gradient-to-br transition-all hover:z-10 hover:scale-110 sm:max-w-56',
        isDarkMode
          ? 'from-red-500 via-orange-500 to-yellow-500'
          : 'from-cyan-400 via-blue-400 to-indigo-400',
      )}
    >
      <CardHeader className="items-center p-4 pt-6 text-center">
        <img alt={title} className={cn('h-[50px] w-[50px]', className)} {...props} />
        <Typography className="text-xl" variant="heading">
          {title}
        </Typography>

        <Typography className="text-xs">{dependencyKeyAndVersion}</Typography>
      </CardHeader>

      <CardContent className="flex flex-grow flex-col px-4 pb-6 pt-0 text-center">
        <Typography className="flex-grow">{description}</Typography>

        <Typography className="text-xs">
          <a
            className="underline underline-offset-2"
            href={learnMore.url}
            rel="noreferrer"
            target="_blank"
          >
            {`Learn more about ${learnMore.label ?? title}`}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
}

export function TechCards() {
  return techCards.map((props) => <TechCard key={props.title} {...props} />);
}
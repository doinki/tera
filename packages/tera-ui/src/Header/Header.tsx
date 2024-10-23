import { GitHub, Tera } from '@tera/icons';
import { type ElementType } from 'react';
import { twJoin } from 'tailwind-merge';

import { IconButton } from '../IconButton';
import { ThemeSwitch } from '../ThemeSwitch';

export interface HeaderProps {
  Link?: ElementType;
}

export function Header(props: HeaderProps) {
  const { Link = 'a' } = props;

  return (
    <header
      className={twJoin(
        'pointer-events-none sticky top-0 flex items-center justify-between border-b *:pointer-events-auto',
        'px-4 py-1 md:px-6 md:py-2 lg:px-8 lg:py-4',
      )}
    >
      <Link href="/" title="Go to Home" to="/">
        <Tera height={40} width={40} />
        <span className="sr-only">Tera</span>
      </Link>

      <div className="inline-flex items-center gap-4 md:gap-6">
        <IconButton asChild>
          <ThemeSwitch className="size-6" />
        </IconButton>
        <IconButton asChild>
          <a
            aria-label="GitHub"
            href="https://github.com/doinki/tera"
            rel="noreferrer"
            target="_blank"
          >
            <GitHub className="size-6 dark:fill-white" />
          </a>
        </IconButton>
      </div>
    </header>
  );
}

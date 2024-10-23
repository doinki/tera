import { Tera } from '@tera/icons';
import { type ElementType } from 'react';
import { twJoin } from 'tailwind-merge';

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
      <Link className="-m-1 p-1" href="/" title="Go to Home" to="/">
        <Tera height={32} width={32} />
        <span className="sr-only">Tera</span>
      </Link>
      <ThemeSwitch className="size-6" />
    </header>
  );
}

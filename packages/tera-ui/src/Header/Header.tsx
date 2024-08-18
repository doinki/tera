import { Tera } from '@tera/icons';
import { type ElementType } from 'react';

import { ThemeSwitch } from '../ThemeSwitch';

export interface HeaderProps {
  Link?: ElementType;
}

export function Header(props: HeaderProps) {
  const { Link = 'a' } = props;

  return (
    <header className="pointer-events-none sticky top-0 flex items-center justify-between p-4 *:pointer-events-auto md:p-6 lg:p-8">
      <Link className="-m-2 p-2" href="/" title="Go to Home" to="/">
        <Tera height={48} width={48} />
        <span className="sr-only">Tera</span>
      </Link>
      <ThemeSwitch className="size-8" />
    </header>
  );
}

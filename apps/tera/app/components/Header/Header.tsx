import { Link } from '@remix-run/react';

import { Tera } from '../icons/Tera';
import { ThemeSwitch } from '../ThemeSwitch';

export function Header() {
  return (
    <header className="pointer-events-none sticky top-0 flex items-center justify-between p-4 *:pointer-events-auto md:p-6 lg:p-8">
      <Link className="-m-2 p-2" title="Go to Home" to="/">
        <Tera height={48} width={48} />
      </Link>
      <ThemeSwitch className="size-8" />
    </header>
  );
}

import { ThemeSwitch } from '../ThemeSwitch';

export function Header() {
  return (
    <header className="sticky top-0 p-4 text-end">
      <ThemeSwitch className="size-8" />
    </header>
  );
}

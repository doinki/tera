import { GitHub } from '@tera/icons';
import { twJoin } from 'tailwind-merge';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={twJoin(
        'grid justify-items-center gap-2 p-4 md:p-6 lg:p-8',
        className,
      )}
    >
      <cite>
        &copy; {new Date().getFullYear()} doinki. All rights reserved.
      </cite>

      <a
        aria-label="GitHub"
        href="https://github.com/doinki/tera"
        rel="noreferrer"
        target="_blank"
      >
        <GitHub className="dark:fill-white" />
      </a>
    </footer>
  );
}

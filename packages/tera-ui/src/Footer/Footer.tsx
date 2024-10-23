import { GitHub } from '@tera/icons';
import { twJoin } from 'tailwind-merge';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={twJoin(
        'grid justify-items-center gap-2 border-t px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-6',
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

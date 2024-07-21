import { GitHub } from '../icons/GitHub';

export function Footer() {
  return (
    <footer className="grid justify-items-center gap-2 p-4">
      <cite>
        &copy; {new Date().getFullYear()} doinki. All rights reserved.
      </cite>

      <a
        aria-label="GitHub"
        className="rounded-full"
        href="https://github.com/doinki/tera"
        rel="noreferrer"
        target="_blank"
      >
        <GitHub className="dark:fill-white" />
      </a>
    </footer>
  );
}

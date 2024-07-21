import './index.css';

import {
  type ButtonHTMLAttributes,
  forwardRef,
  useEffect,
  useId,
  useState,
} from 'react';

import { useIsMounted } from '~/hooks/useIsMounted';

export type Theme = 'light' | 'dark';

export interface ThemeSwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  onChange?: (theme: Theme) => void;
}

const LIGHT = 'light';
const DARK = 'dark';

export const ThemeSwitch = forwardRef<HTMLButtonElement, ThemeSwitchProps>(
  (props, ref) => {
    const { className, onClick, onChange, ...other } = props;

    const id = useId();
    const [theme, setTheme] = useState<Theme>(LIGHT);
    const isMounted = useIsMounted();

    useEffect(() => {
      if (document.documentElement.classList.contains(DARK)) {
        setTheme(DARK);
      }
    }, []);

    return (
      <button
        ref={ref}
        aria-label={isMounted ? theme : undefined}
        aria-live="polite"
        className={['theme-switch', className].join(' ').trim()}
        title="Theme Switch"
        type="button"
        onClick={(e) => {
          if (theme === DARK) {
            window.__setPreferredTheme(LIGHT);
            setTheme(LIGHT);
          } else {
            window.__setPreferredTheme(DARK);
            setTheme(DARK);
          }

          onClick?.(e);
          onChange?.(theme);
        }}
        {...other}
      >
        <svg aria-hidden="true" strokeLinecap="round" viewBox="0 0 24 24">
          <mask fill="currentColor" id={id}>
            <rect fill="white" height="100%" width="100%" x="0" y="0" />
            <circle className="moon" cx="24" cy="10" fill="black" r="6" />
          </mask>
          <circle
            className="sun"
            cx="12"
            cy="12"
            fill="currentColor"
            mask={`url(#${id})`}
            r="6"
          />
          <g className="sun-beams" stroke="currentColor" strokeWidth="2">
            <line x1="12" x2="12" y1="1" y2="3" />
            <line x1="12" x2="12" y1="21" y2="23" />
            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
            <line x1="1" x2="3" y1="12" y2="12" />
            <line x1="21" x2="23" y1="12" y2="12" />
            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
          </g>
        </svg>
      </button>
    );
  },
);

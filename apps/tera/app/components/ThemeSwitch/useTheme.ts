import { useSyncExternalStore } from 'react';

import { DARK, LIGHT } from './theme';
import { type Theme } from './ThemeSwitch';

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'class'
      ) {
        onStoreChange();
      }
    });
  });

  observer.observe(document.documentElement, {
    attributeFilter: ['class'],
    attributes: true,
  });

  return () => {
    observer.disconnect();
  };
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains(DARK) ? DARK : LIGHT;
}

export function useTheme(defaultTheme: Theme = LIGHT): Theme {
  return useSyncExternalStore(subscribe, getSnapshot, () => defaultTheme);
}

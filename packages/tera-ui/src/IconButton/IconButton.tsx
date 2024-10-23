import { Slot } from '@radix-ui/react-slot';
import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        ref={ref}
        className={twMerge(
          '-m-2 rounded-full p-2 transition-colors hover:bg-black/10 dark:hover:bg-white/15',
          className,
        )}
        {...rest}
      />
    );
  },
);

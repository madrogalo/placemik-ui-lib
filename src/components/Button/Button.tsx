import React, { HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

export enum ButtonSizes {
  FULL = 'w-full',
  DEFAULT = 'w-auto',
  MEDIUM = 'h-12 px-16',
}

export enum ButtonVariants {
  PURPLE_PRIMARY = `bg-purple-pink text-neutral-white hover:bg-opacity-50 disabled:text-opacity-50`,
  PURPLE_SECONDARY = `
                        gradient-border-2 border-gradient-r-red-blue-white-900
                        bg-white rounded-md h-12 px-16 text-black
                        text-neutral-black hover:bg-opacity-50
                        disabled:text-opacity-50
                     `,
  NOT_CREATED = `bg-neutral-charcoal-light hover:bg-opacity-50 disabled:text-opacity-50`,
  NOT_ADDED = `bg-neutral-charcoal-dark text-white hover:bg-opacity-50 disabled:text-opacity-50`,
}

export type ButtonProps = {
  className?: string;
  textClassName?: string;
  disabled?: boolean;
  size: keyof typeof ButtonSizes;
  variant: keyof typeof ButtonVariants;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;
export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(function Button(
  {
    children,
    className = '',
    textClassName = '',
    disabled = false,
    size,
    variant,
    ...props
  },
  ref,
) {
  const buttonStyles = classNames(
    ButtonSizes[size],
    ButtonVariants[variant],
    'font-medium transition duration-200 focus:outline-none',
    'flex items-center justify-center gap-4 text-center outline-none',
    'overflow-hidden text-ellipsis',
    'disabled:pointer-events-none disabled:opacity-50',
    className,
  );

  return (
    <button ref={ref} className={buttonStyles} disabled={disabled} {...props}>
      <span className={textClassName}>{children}</span>
    </button>
  );
});

export default Button;
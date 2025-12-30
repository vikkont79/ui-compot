import type React from "react";
import { Link as RouterLink } from 'react-router-dom'
import styles from "./Button.module.css"
import type { BasePressableProps, Size, Variant } from "../../../utils/types";

interface BaseButtonProps extends BasePressableProps {
  variant?: Variant;
  size?: Size;
}

type ButtonProps = BaseButtonProps & (
  | {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    to?: never;
  }
  | {
    to: string;
    type?: never;
    onClick?: never;
  }
)

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  to,
  ...attributes
}) => {
  return to ? (
    <RouterLink
      className={`${styles.button} ${styles[variant]} ${className || ''}`.trim()}
      to={to}
      {...attributes}
    >
      {children}
    </RouterLink>
  ) : (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className || ''}`.trim()}
      onClick={onClick}
      {...attributes}
    >
      {children}
    </button>
  );
}

export { Button };

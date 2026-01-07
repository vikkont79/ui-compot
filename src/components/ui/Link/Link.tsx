import type React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import styles from './Link.module.css'
import type { BasePressableProps } from '../../../utils/types';

type LinkProps = BasePressableProps & (
  | { to: string }
  | { to?: never }
)

const Link: React.FC<LinkProps> = ({
  children,
  className = '',
  to,
  ...attributes
}) => {
  return to ? (
    <RouterLink
      {...attributes}
      className={`${styles.link} ${className || ''}`.trim()}
      to={to}
    >
      {children}
    </RouterLink>
  ) : (
    <span
      {...attributes}
      className={`${styles.link} ${className || ''}`.trim()}
    >
      {children}
    </span>
  )
}

export { Link }

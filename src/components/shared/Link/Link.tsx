import { Link as RouterLink } from 'react-router-dom'
import styles from './Link.module.css'
import type { BasePressableProps } from '../../../utils/types'

type LinkProps = BasePressableProps & (
  | { to: string }
  | { to?: never }
)

const Link = ({
  children,
  className = '',
  to,
  ...props
}: LinkProps) => {
  return to ? (
    <RouterLink
      {...props}
      className={`${styles.link} ${className || ''}`.trim()}
      to={to}
    >
      {children}
    </RouterLink>
  ) : (
    <span
      {...props}
      className={`${styles.link} ${className || ''}`.trim()}
    >
      {children}
    </span>
  )
}

export { Link }

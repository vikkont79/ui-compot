import styles from './Icon.module.css';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: number | string;
  color?: string;
  label?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
  label,
  ...rest
}) => {
  const inlineStyles = {
    '--icon-size': typeof size === 'number' ? `${size}px` : size,
    '--icon-color': color,
    '--icon-mask': `url(/icons/${name}.svg)`,
  } as React.CSSProperties;

  const accessibilityProps = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': true };

  return (
    <span
      className={`${styles.icon} ${className}`.trim()}
      style={inlineStyles}
      {...accessibilityProps}
      {...rest}
    />
  );
};

export { Icon }

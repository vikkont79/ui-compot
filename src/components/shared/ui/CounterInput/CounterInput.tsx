import { Icon } from "../Icon/Icon";
import styles from './CounterInput.module.css'


interface CounterInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  iconSize?: number | string;
  className?: string;
}

const CounterInput = ({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  iconSize = 16,
  className = '',
}: CounterInputProps) => {
  const handleIncrement = () => {
    onChange(Math.min(max, value + step));
  };

  const handleDecrement = () => {
    onChange(Math.max(min, value - step));
  }
  return (
    <div className={`${styles.counterWrapper} ${className}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <div className={styles.counter}>
        <button
          type="button"
          onClick={handleDecrement}
          disabled={value <= min}
          className={styles.button}
          aria-label='Уменьшить'
        >
          <Icon name="minus" size={iconSize} />
        </button>

        <input
          id={id}
          type="text"
          value={value}
          readOnly
          className={styles.input}
          aria-label={label}
        />

        <button
          type="button"
          onClick={handleIncrement}
          disabled={value >= max}
          className={styles.button}
          aria-label='Увеличить'
        >
          <Icon name="plus" size={iconSize} />
        </button>
      </div>
    </div>
  )
}

export { CounterInput }

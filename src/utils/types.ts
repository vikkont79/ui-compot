/**
 * Общие типы для UI-каталога.
 * Импортируйте их в своих компонентах.
 */

/* Базовые пропсы для всех кнопок/кликабельных элементов */
export interface BaseButtonProps {
  /** Текст или содержимое кнопки */
  children: React.ReactNode;
  /** Дополнительные CSS-классы */
  className?: string;
  /** Отключено ли состояние */
  disabled?: boolean;
  /** Тип кнопки (submit, button, reset) */
  type?: 'button' | 'submit' | 'reset';
  /** Обработчик клика */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/* Базовые пропсы для инпутов/форм */
export interface BaseInputProps {
  /** Значение поля */
  value: string;
  /** Обработчик изменения значения */
  onChange: (value: string) => void;
  /** Плейсхолдер */
  placeholder?: string;
  /** Отключено ли поле */
  disabled?: boolean;
  /** Дополнительные CSS-классы */
  className?: string;
}

/* Варианты внешнего вида компонентов */
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

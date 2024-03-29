// Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const baseStyle =
    'px-4 py-4 rounded-lg font-medium text-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary:
      'bg-brand-greenDark text-gray-light focus:ring-brand-green hover:bg-brand-green',
    secondary:
      'bg-gray-300 text-gray-800 focus:ring-gray-400 hover:bg-gray-400',
    danger: 'bg-red-500 text-white focus:ring-red-500 hover:bg-red-600'
  };

  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabledStyle} ${className}`}
    >
      {children}
    </button>
  );
};

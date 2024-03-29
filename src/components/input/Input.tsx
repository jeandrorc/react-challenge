import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  type?: string;
  placeholder?: string;
  errors: FieldErrors;
  normalizeInput?: (inputValue: string) => string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  required = false,
  type = 'text',
  placeholder,
  errors,
  normalizeInput
}) => {
  const hasError = errors[name];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (normalizeInput) {
      const normalizedValue = normalizeInput(event.target.value);
      event.target.value = normalizedValue;
    }
  };
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={name}
        className={`mb-2 text-md font-bold text-gray-light text-left ${hasError && 'text-danger'}`}
      >
        {label}
      </label>
      <input
        {...register(name, { required })}
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={`bg-gray-50 border border-gray-300 text-gray-900 ${hasError && 'border-danger bg-opacity-50 bg-danger/5'} text-lg rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
      />
      {hasError && (
        <span className="mt-1 text-sm text-danger">{`${errors?.[name]?.message}`}</span>
      )}
    </div>
  );
};

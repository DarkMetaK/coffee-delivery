import { InputHTMLAttributes } from 'react'

export function Input({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`bg-gray-300 p-3 rounded-[4px] font-base text-sm leading-snug text-gray-700  outline-none border border-gray-400 placeholder:text-gray-600 focus-within:border-yellow-600 ${className}`}
      {...rest}
    />
  )
}

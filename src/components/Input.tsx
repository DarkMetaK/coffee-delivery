import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

export function Input({
  name = '',
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className={className}>
      <input
        className={`w-full bg-gray-300 p-3 rounded-[4px] font-base text-sm leading-snug text-gray-700 outline-none border border-gray-400 placeholder:text-gray-600 focus-within:border-yellow-600 ${
          errors[name] && 'border-red-500'
        }`}
        {...register(name)}
        {...rest}
      />
      {errors[name] && (
        <p className="text-xs leading-snug text-red-500">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  )
}

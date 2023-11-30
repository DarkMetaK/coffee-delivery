import { InputHTMLAttributes, ReactNode } from 'react'

interface IRadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: ReactNode
}

export function RadioInput({ label, icon, ...rest }: IRadioInputProps) {
  return (
    <label className="bg-gray-400 p-4 rounded-md flex gap-3 items-center font-base text-xs leading-normal text-gray-700 uppercase border border-transparent checkbox-label flex-1 cursor-pointer focus-within:bg-gray-500 hover:bg-gray-500">
      {icon}
      {label}
      <input type="radio" {...rest} className="opacity-0 fixed w-0" />
    </label>
  )
}

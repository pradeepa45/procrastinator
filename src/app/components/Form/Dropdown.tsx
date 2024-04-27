import { Dropdown } from 'semantic-ui-react'

interface SelectProps {
  placeholder?: string
  defaultValue?: string
  options: Array<Record<string, string>>
  disabled?: boolean
  fluid?: boolean
  search?: boolean
  selection?: boolean
}

export default function Select({placeholder, defaultValue, options, disabled, ...rest}:SelectProps) {
  return (
    <Dropdown
      placeholder={placeholder}
      defaultValue={defaultValue}
      options={options}
      disabled={disabled}
      {...rest}
      />
  )
}
import { Input } from 'semantic-ui-react'

interface TextInputProps {
  placeholder: string
  onChange: (e:any, data: any) => void
  name: string
  value: string
  loading?: boolean
  required?: boolean
  type?: string
  label?: string
}

export default function TextInput({placeholder, onChange, name, value, loading, required, ...rest}:TextInputProps) {
  return (
    <Input placeholder={placeholder} onChange={onChange} name={name} value={value} loading={loading} required={required} {...rest}/>
  )
}
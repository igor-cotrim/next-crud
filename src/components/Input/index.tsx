type InputProps = {
  type?: 'text' | 'number'
  text: string
  value: any
  readOnly?: boolean
  onChange?: (value: any) => void
  className?: string
}

const Input = ({
  text,
  type = 'text',
  value,
  readOnly = false,
  onChange,
  className
}: InputProps) => (
  <div className={`flex flex-col ${className}`}>
    <label className={`mb-2`}>{text}</label>
    <input
      type={type}
      value={value}
      readOnly={readOnly}
      onChange={(e) => onChange?.(e.target.value)}
      className={`
        border border-purple-500 rounded-lg
        focus:outline-none bg-gray-100 px-4 py-2
        ${!readOnly && 'focus:bg-white'}
      `}
    />
  </div>
)

export default Input

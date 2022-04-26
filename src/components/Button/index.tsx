type ButtonProps = {
  color?: 'green' | 'blue' | 'gray'
  className?: string
  children: React.ReactNode
}

const Button = ({ children, color = 'gray', className }: ButtonProps) => (
  <button
    className={`
      bg-gradient-to-r from-${color}-400 to-${color}-700
      text-white px-4 py-2 rounded-md
      ${className}
    `}
  >
    {children}
  </button>
)

export default Button

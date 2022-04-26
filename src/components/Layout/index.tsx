import Title from '../Title'

type LayoutProps = {
  title: string
  children: React.ReactNode
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div
      className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}
    >
      <Title>{title}</Title>
      <div className={`p-6`}>{children}</div>
    </div>
  )
}

export default Layout

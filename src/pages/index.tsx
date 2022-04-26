import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-700
    `}>
      <h1 className={`text-4xl`}>
        Hello world
      </h1>
    </div>
  )
}

export default Home

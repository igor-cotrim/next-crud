import type { NextPage } from 'next'

import Client from '../core/Client'

import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'

const Home: NextPage = () => {
  const clients = [
    new Client('1', 'Bianca', 28),
    new Client('2', 'Igor', 22),
    new Client('3', 'Gicelia', 47),
    new Client('4', 'Alex', 55)
  ]

  const selectedClient = (client: Client) => {
    console.log('sseasd', client)
  }

  const deletedClient = (client: Client) => {
    console.log('sseasd', client.name)
  }

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout title="Cadastro Simples">
        <div className={`flex justify-end`}>
          <Button color="green" className="mb-4">
            Novo Cliente
          </Button>
        </div>
        <Table
          clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        />
        <Form client={clients[0]} />
      </Layout>
    </div>
  )
}

export default Home

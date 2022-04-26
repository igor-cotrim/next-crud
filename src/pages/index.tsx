import { useState } from 'react'
import type { NextPage } from 'next'

import Client from '../core/Client'

import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'

const Home: NextPage = () => {
  const [client, setClient] = useState(Client.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('1', 'Bianca', 28),
    new Client('2', 'Igor', 22),
    new Client('3', 'Gicelia', 47),
    new Client('4', 'Alex', 55)
  ]

  const selectedClient = (client: Client) => {
    setClient(client)
    setVisible('form')
  }

  const deletedClient = (client: Client) => {
    console.log('sseasd', client.name)
  }

  const newClient = () => {
    setClient(Client.empty())
    setVisible('form')
  }

  const onSaveClient = (client: Client) => {
    console.log(client)
    setVisible('table')
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
        {visible === 'table' ? (
          <>
            <div className={`flex justify-end`}>
              <Button onClick={newClient} color="green" className="mb-4">
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            />
          </>
        ) : (
          <Form
            client={client}
            onChange={onSaveClient}
            handleCancel={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  )
}

export default Home

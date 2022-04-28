import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { supabase } from '../lib/supabaseClient'

import Client from '../core/Client'

import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'

const Home: NextPage = () => {
  const [client, setClient] = useState(Client.empty())
  const [listToClients, setListToClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const listAllClients = () => {
    supabase.from('crud-name-age').then((clients) => {
      if (clients.data) {
        setListToClients(clients.data)
        setVisible('table')
      }
    })
  }

  const selectedClient = (client: Client) => {
    setClient(client)
    setVisible('form')
  }

  const deletedClient = async (client: Client) => {
    await supabase.from('crud-name-age').delete().match({ id: client.id })
    listAllClients()
  }

  const newClient = async () => {
    setClient(Client.empty())
    setVisible('form')
  }

  const onSaveClient = async (client: Client) => {
    if (client.id) {
      await supabase
        .from('crud-name-age')
        .update({
          name: client.name,
          age: client.age
        })
        .match({ id: client.id })
    } else {
      await supabase.from('crud-name-age').insert({
        name: client.name,
        age: client.age
      })
    }
    listAllClients()
  }

  useEffect(listAllClients, [])

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
              clients={listToClients}
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

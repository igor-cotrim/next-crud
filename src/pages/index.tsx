import type { NextPage } from 'next'

import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClients from '../hooks/useClients'

const Home: NextPage = () => {
  const {
    visible,
    setVisible,
    client,
    newClient,
    listToClients,
    onSelecteClient,
    onDeleteClient,
    onSaveClient
  } = useClients()

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
              selectedClient={onSelecteClient}
              deletedClient={onDeleteClient}
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

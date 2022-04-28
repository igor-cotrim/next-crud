import { useEffect, useState } from 'react'

import { supabase } from '../lib/supabaseClient'
import Client from '../core/Client'

const useClients = () => {
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

  const onSelecteClient = (client: Client) => {
    setClient(client)
    setVisible('form')
  }

  const onDeleteClient = async (client: Client) => {
    await supabase.from('crud-name-age').delete().match({ id: client.id })
    listAllClients()
  }

  const newClient = () => {
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

  return {
    client,
    listToClients,
    visible,
    setVisible,
    onSaveClient,
    newClient,
    onDeleteClient,
    onSelecteClient
  }
}

export default useClients

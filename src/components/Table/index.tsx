import Client from '../../core/Client'

import { IconEdit, IconTrash } from '../../utils/icons'

type TableProps = {
  clients: Client[]
  selectedClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}

const Table = ({ clients, deletedClient, selectedClient }: TableProps) => {
  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
      <thead
        className={`
          bg-gradient-to-r from-purple-500 to-purple-800
          text-gray-100
        `}
      >
        <tr>
          <th className={`text-left p-4 text-xl`}>Código</th>
          <th className={`text-left p-4 text-xl`}>Nome</th>
          <th className={`text-left p-4 text-xl`}>Idade</th>
          {(selectedClient || deletedClient) && (
            <th className={`p-4 text-xl`}>Ações</th>
          )}
        </tr>
      </thead>
      <tbody>
        {clients?.map((client, i) => {
          return (
            <tr
              key={client.id}
              className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
            >
              <td className={`text-left p-4 text-lg font-semibold`}>
                {client.id}
              </td>
              <td className={`text-left p-4 text-lg font-semibold`}>
                {client.name}
              </td>
              <td className={`text-left p-4 text-lg font-semibold`}>
                {client.age}
              </td>
              {(selectedClient || deletedClient) && (
                <td className={`flex justify-center`}>
                  {selectedClient && (
                    <button
                      onClick={() => selectedClient?.(client)}
                      className={`
                    flex justify-center items-center text-green-600 rounded-full
                    p-2 m-1 hover:bg-purple-50
                  `}
                    >
                      <IconEdit />
                    </button>
                  )}
                  {deletedClient && (
                    <button
                      onClick={() => deletedClient?.(client)}
                      className={`
                    flex justify-center items-center text-red-500 rounded-full
                    p-2 m-1 hover:bg-purple-50
                  `}
                    >
                      <IconTrash />
                    </button>
                  )}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table

import { useState } from 'react'

import Client from '../../core/Client'

import Button from '../Button'
import Input from '../Input'

type FormProps = {
  client: Client
  onChange?: (client: Client) => void
  handleCancel?: () => void
}

const Form = ({ client, handleCancel, onChange }: FormProps) => {
  const [name, setName] = useState(client?.name ?? '')
  const [age, setAge] = useState(client?.age ?? 0)

  return (
    <div>
      {!!client?.id && (
        <Input text="Código" value={client?.id} readOnly className={`mb-5`} />
      )}
      <Input text="Nome" value={name} onChange={setName} className={`mb-5`} />
      <Input text="Idade" type="number" value={age} onChange={setAge} />
      <div className={`flex justify-end mt-7`}>
        <Button
          color="blue"
          className="mr-2"
          onClick={() => onChange?.(new Client(client?.id, name, Number(age)))}
        >
          {client?.id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={handleCancel}>Cancelar</Button>
      </div>
    </div>
  )
}

export default Form

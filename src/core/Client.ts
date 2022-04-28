export default class Client {
  #id: string | null
  #name: string
  #age: number
  #created_at?: string

  constructor(id: string | null, name = '', age = 0, created_at = '') {
    this.#id = id
    this.#name = name
    this.#age = age
    this.#created_at = created_at
  }

  static empty() {
    return new Client(null, '', 0)
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get age() {
    return this.#age
  }
  get created_at() {
    return this.#created_at
  }
}

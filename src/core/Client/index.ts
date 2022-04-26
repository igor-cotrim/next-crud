export default class Client {
  #id: string | null
  #name: string
  #age: number

  constructor(id: string | null, name = '', age = 0) {
    this.#id = id
    this.#name = name
    this.#age = age
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
}

import axios from 'axios'


export class Api {
  private static baseURL: any = process.env.REACT_APP_API_URL

  static __send(url: string) {
    return axios.get(Api.baseURL+url)
  }
  static get(initialLink: string) {
    return this.__send(`/get?initial_link=${initialLink}`)

  }
  static getByMinLy(link: string) {
    return this.__send(`/getByMinLy?link=${link}`)
  }
}

import axios, { AxiosResponse } from 'axios';

const baseUrl = "https://api.github.com/users"
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
}

export const USERSAPI = {
  getUser: (user: string) => requests.get(`${baseUrl}/${user}`)
}

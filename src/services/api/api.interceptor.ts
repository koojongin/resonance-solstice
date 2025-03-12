import axios from 'axios'
import { toast } from 'react-toastify'

const apiClient = axios.create({
  baseURL: 'https://rsns.duckdns.org:3001',
  // baseURL: 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json' },
})

apiClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    toast(error.message)
    return Promise.reject(error)
  },
)

export const api = apiClient

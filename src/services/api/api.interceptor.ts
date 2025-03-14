import axios from 'axios'
import { toast } from 'react-toastify'

const isProduction = process.env.NODE_ENV === 'production'
const apiClient = axios.create({
  // baseURL: isProduction ? 'https://resonance-solstice.store:3001/' : 'http://localhost:3001',
  baseURL: 'https://resonance-solstice.store:3001/',
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
    if (error.status === 429) {
      try {
        const { message, statusCode } = error.response.data
        toast(message || error.message || 'Unexpected Error.')
        return Promise.reject(error)
      } catch (e) {
        /* empty */
      }
    }
    return Promise.reject(error)
  },
)

export const api = apiClient

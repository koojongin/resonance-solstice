'use client'

import { useEffect, useState } from 'react'
import { api } from '@/services/api/api.interceptor'

export const useFetch = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(url)
        setData(response.data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return {
    data,
    loading,
    error,
  }
}

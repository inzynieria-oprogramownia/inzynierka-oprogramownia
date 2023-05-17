import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url, el) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('kurwa')
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url, el])
  return [data, loading, error]
}

export default useFetch

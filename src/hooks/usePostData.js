/* eslint-disable operator-linebreak */
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const usePostData = () => {
  const valueFromRedux = useSelector((state) => state.post)
  const [value, setValue] = useState(valueFromRedux)
  const navigateTo = useNavigate()

  useEffect(() => {
    setValue(valueFromRedux)
  }, [valueFromRedux])

  useEffect(() => {
    if (value.title === null || value.description === null) {
      navigateTo('/404')
    }
  }, [value])

  return value
}

export default usePostData

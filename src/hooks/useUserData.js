/* eslint-disable operator-linebreak */
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const useUserData = () => {
  const valueFromRedux = useSelector((state) => state.person)
  const [value, setValue] = useState(valueFromRedux)
  const navigateTo = useNavigate()

  useEffect(() => {
    setValue(valueFromRedux)
  }, [valueFromRedux])

  useEffect(() => {
    if (
      value.name === null &&
      value.email === null &&
      value.password === null
    ) {
      navigateTo('/login')
    }
  }, [value, navigateTo])

  return value
}

export default useUserData

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const useData = (selector) => {
  const value = useSelector(selector)
  const history = useHistory()

  if (value === null) {
    history.push('/404')
  }

  return value
}
export default useData

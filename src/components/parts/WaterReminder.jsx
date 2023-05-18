/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { waterReminder } from '../../mocks/popups'

const WaterReminder = () => {
  const ONE_HOUR = 1000 * 3600
  useEffect(() => {
    const intervalId = setInterval(() => {
      toast('Remember to drink water 😇', {
        ...waterReminder,
      })
    }, ONE_HOUR)
    return () => clearInterval(intervalId)
  }, [])

  return <ToastContainer />
}

export default WaterReminder

/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const WaterReminder = () => {
  const ONE_HOUR = 1000 * 3600
  useEffect(() => {
    const intervalId = setInterval(() => {
      toast('Remember to drink water 😇', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { background: '#a5cb54', color: 'white' },
      })
    }, ONE_HOUR)
    return () => clearInterval(intervalId)
  }, [])

  return <ToastContainer />
}

export default WaterReminder

/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import axios from 'axios'
import Button from './Button'
import useUserData from '../../hooks/useUserData'
import Input from './Input'
import { addUserWeight, setUserWeight } from '../../redux/slices/user'
import getFormattedDate from '../../utils/date'

const CustomLabel = ({ x, y, stroke, value }) => (
  <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
    {`${value}kg`}
  </text>
)
const CustomizedAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} textAnchor="end" fill="#666" transform="rotate(-45)">
      {payload.value}
    </text>
  </g>
)

const WeightChart = () => {
  const [weight, setWeight] = useState(0)
  const data = useUserData()
  const dispatch = useDispatch()

  const handleAddWeight = (e) => {
    e.preventDefault()
    const currentDate = getFormattedDate()
    const dates = data.user_weights.map((el) => el.date)
    const weightData = data.user_weights.map((el) => {
      if (el.date === currentDate) {
        return { ...el, weight }
      }
      return el
    })
    const isDateInArr = dates.includes(currentDate)
    if (!isDateInArr) {
      const element = { date: currentDate, weight }
      dispatch(addUserWeight(element))
      axios.post('http://localhost/api/api/users/weight/addWeight.php', {
        userid: data.id,
        ...element,
      })
    }
    if (isDateInArr) {
      dispatch(setUserWeight(weightData))
    }
  }
  const handleSetWeight = (value) => {
    if (value < 200 && value >= 0) setWeight(value)
  }

  return (
    <>
      <div className="chart--wrapper">
        <form action="POST">
          <Button
            type="submit"
            onClick={(e) => handleAddWeight(e)}
            className="chart--button"
          >
            Add weight
          </Button>
        </form>
        <Input
          className="chart--input"
          placeholder="weight"
          max="200"
          min="1"
          type="number"
          value={weight}
          onInputChange={handleSetWeight}
        />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          margin={{
            bottom: 225,
            top: 70,
            left: -20,
          }}
          data={data.user_weights}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            overlinePosition
            dataKey="date"
            height={20}
            padding={{ left: 30, right: 30 }}
            tick={<CustomizedAxisTick />}
          />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" iconSize={30} height={36} />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#a5cb54"
            strokeWidth={3}
            label={<CustomLabel />}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
export default WeightChart

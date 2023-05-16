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

  const handleAddWeight = () => {
    const currentDate = getFormattedDate()
    const dates = data.weight.map((el) => el.day)
    const weightData = data.weight.map((el) => {
      if (el.day === currentDate) {
        return { ...el, value: weight }
      }
      return el
    })
    const isDateInArr = dates.includes(currentDate)
    if (!isDateInArr) {
      const element = { day: currentDate, value: weight }
      dispatch(addUserWeight(element))
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
        <Button onClick={handleAddWeight} className="chart--button">
          Add weight
        </Button>
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
          data={data.weight}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            overlinePosition
            dataKey="day"
            height={20}
            padding={{ left: 30, right: 30 }}
            tick={<CustomizedAxisTick />}
          />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" iconSize={30} height={36} />
          <Line
            type="monotone"
            dataKey="value"
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

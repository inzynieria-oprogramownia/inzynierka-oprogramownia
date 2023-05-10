/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
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
  const data = [
    { day: '10.10.2020', Waga: 45 },
    { day: '11.10.2020', Waga: 50 },
    { day: '12.10.2020', Waga: 60 },
    { day: '13.10.2020', Waga: 32 },
    { day: '14.10.2020', Waga: 15 },
    { day: '15.10.2020', Waga: 40 },
    { day: '16.10.2020', Waga: 70 },
    { day: '17.10.2020', Waga: 90 },
    { day: '18.10.2020', Waga: 100 },
  ]
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        margin={{
          bottom: 225,
          top: 70,
          left: -20,
        }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          overlinePosition
          dataKey="day"
          height={20}
          tick={<CustomizedAxisTick />}
        />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" iconSize={30} height={36} />
        <Line
          type="monotone"
          dataKey="Waga"
          stroke="#a5cb54"
          strokeWidth={3}
          label={<CustomLabel />}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default WeightChart

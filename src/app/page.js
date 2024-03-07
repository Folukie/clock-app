'use client'

import Alarm from '@/components/alarm'
import AlarmList from '@/components/alarmlist'
import Clock from '@/components/clock'
import React, { useState } from 'react'

const App = () => {
  const [alarms, setAlarms] = useState([])
  console.log(alarms)
  const addAlarm = (newAlarm) => {
    setAlarms([...alarms, newAlarm])
  }

  const deleteAlarm = (index) => {
    const updatedAlarms = [...alarms]
    updatedAlarms.splice(index, 1)
    setAlarms(updatedAlarms)
  }

  return (
    <div className="container mx-auto p-8 text-center">
      <Clock alarms={alarms} />
      <Alarm setAlarm={addAlarm} />
      {alarms.length >= 1 && (
        <AlarmList alarms={alarms} deleteAlarm={deleteAlarm} />
      )}
    </div>
  )
}

export default App

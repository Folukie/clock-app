import React, { useState } from 'react'

const Alarm = ({ setAlarm }) => {
  const [alarmHour, setAlarmHour] = useState('')
  const [alarmMinute, setAlarmMinute] = useState('')
  const [amPm, setAmPm] = useState('AM')

  const handleSetAlarm = () => {
    if (alarmHour && alarmMinute) {
      setAlarm(`${alarmHour}:${alarmMinute} ${amPm}`)
      setAlarmHour('')
      setAlarmMinute('')
      setAmPm('AM')
    }
  }

  const handleHourChange = (e) => {
    let value = e.target.value
    if (value >= 1 <= 9) {
      value = 0 + value
    } else if (value < 1) {
      value = '1'
    } else if (value > 12) {
      value = '12'
    }
    setAlarmHour(value)
  }

  const handleMinuteChange = (e) => {
    let value = e.target.value
    if (value < 0) {
      value = '0'
    } else if (value > 59) {
      value = '59'
    }
    setAlarmMinute(value)
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Set Alarm</h2>
      <div className="flex justify-center my-4">
        <input
          type="number"
          min="1"
          max="12"
          className="border border-red-400 rounded px-3 py-2 mr-2 focus:border-red-800 bg-[#ffe4c4]"
          value={alarmHour}
          onChange={handleHourChange}
        />
        <span className="mr-2">:</span>
        <input
          type="number"
          min="0"
          max="59"
          className="border border-red-400 rounded px-3 py-2 mr-2 focus:border-red-800 bg-[#ffe4c4]"
          value={alarmMinute}
          onChange={handleMinuteChange}
        />
        <select
          className="border border-red-400 rounded px-3 py-2 focus:border-red-800 bg-[#ffe4c4]"
          value={amPm}
          onChange={(e) => setAmPm(e.target.value)}
        >
          <option value="AM" className="bg-white">
            AM
          </option>
          <option value="PM" className="bg-white">
            PM
          </option>
        </select>
      </div>
      <button
        className="bg-[#e68164] hover:bg-[#ce7359] text-white font-bold py-2 px-4 rounded-lg"
        onClick={handleSetAlarm}
      >
        Set Alarm
      </button>
    </div>
  )
}

export default Alarm

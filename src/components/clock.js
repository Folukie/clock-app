import React, { useState, useEffect } from 'react'

const Clock = ({ alarms }) => {
  const [time, setTime] = useState('')
  const [ampm, setAmPm] = useState('')
  const [bgColor, setBgColor] = useState('')

  useEffect(() => {
    const intervalID = setInterval(() => {
      const now = new Date()
      let hours = now.getHours()
      let minutes = now.getMinutes()
      let seconds = now.getSeconds()
      const ampm = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12 || 12

      hours = hours < 10 ? '0' + hours : hours
      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds

      setTime(`${hours}:${minutes}:${seconds}`)
      setAmPm(ampm)

      // Determine background color based on the time of day
      if (hours >= 6 && hours < 18 && ampm === 'AM') {
        // Daytime (6 AM to 6 PM) - Lighter color
        setBgColor('#ececec')
      } else {
        // Nighttime (6 PM to 6 AM) - Darker color
        setBgColor('#6c5713')
      }

      const currentTime = `${hours}:${minutes} ${ampm}`

      alarms.forEach((alarm) => {
        console.log(alarm, currentTime)
        if (alarm === currentTime) {
          alert('Alarm! It is ' + currentTime)
        }
        const [alarmHourStr, alarmMinuteStr] = alarm.split(':')
        const [currentHourStr, currentMinuteStr] = currentTime.split(':')

        // Parse time components to numbers
        const alarmHour = parseInt(alarmHourStr, 10)
        const alarmMinute = parseInt(alarmMinuteStr, 10)
        const currentHour = parseInt(currentHourStr, 10)
        const currentMinute = parseInt(currentMinuteStr, 10)

        // Check if any of the parsed values are NaN
        if (
          isNaN(alarmHour) ||
          isNaN(alarmMinute) ||
          isNaN(currentHour) ||
          isNaN(currentMinute)
        ) {
          console.error('Invalid time format')
          return // or handle the error accordingly
        }

        let timeDifference =
          alarmHour * 60 + alarmMinute - (currentHour * 60 + currentMinute)

        // Ensure the time difference is positive
        if (timeDifference < 0) {
          timeDifference += 24 * 60 // Add 24 hours in minutes if the alarm is for tomorrow
        }

        // Check if the time difference is within the desired range
        if (timeDifference <= 10 && timeDifference >= 0) {
          setBgColor('#00FF00') // Green color

          // Schedule a function to change the color back after 1 minute
          setTimeout(() => {
            if (hours >= 6 && hours < 18 && ampm === 'AM') {
              // Daytime (6 AM to 6 PM) - Lighter color
              setBgColor('#ececec')
            } else {
              // Nighttime (6 PM to 6 AM) - Darker color
              setBgColor('#6c5713')
            } // Set to original color
          }, 600000) // 1 minute in milliseconds
        }
      })
    }, 1000)

    return () => clearInterval(intervalID)
  }, [alarms])

  return (
    <div
      className="text-5xl font-bold mb-8 border-red-900 p-6 h-80 w-80 border-8 rounded-full mx-auto flex flex-col justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div>{time}</div>
      <div>{ampm}</div>
    </div>
  )
}

export default Clock

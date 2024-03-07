import React from 'react'

const AlarmList = ({ alarms, deleteAlarm }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Alarms</h2>
      <ul className="space-y-4 flex flex-col-reverse">
        {alarms.map((alarm, index) => (
          <li
            key={index}
            className="flex items-center justify-between w-max mx-auto space-x-3 border border-red-700 rounded-lg my-2"
          >
            <span className="px-2">{alarm}</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => deleteAlarm(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AlarmList

import React from 'react'

export function Progress({ value = 0, className = '' }) {
  return (
    <div className={'w-full bg-gray-300 rounded-full h-3 ' + className}>
      <div
        className="h-3 rounded-full bg-blue-500 transition-all"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )
}

import React from 'react'

export function Input({ className = '', ...rest }) {
  return (
    <input
      className={
        'px-3 py-2 rounded-md border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 ' +
        className
      }
      {...rest}
    />
  )
}

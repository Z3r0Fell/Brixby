import React from 'react'

export function Card({ children, className = '' }) {
  return (
    <div
      className={
        'p-4 rounded-lg shadow-md frosted bg-white/20 backdrop-blur-md ' +
        className
      }
    >
      {children}
    </div>
  )
}

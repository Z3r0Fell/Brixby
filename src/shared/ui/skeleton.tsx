import React from 'react'

export function Skeleton({ className = '' }) {
  return (
    <div
      className={
        'animate-pulse bg-gray-300 rounded-md h-4 w-full ' + className
      }
    ></div>
  )
}

import React from 'react'

export function Tooltip({ text, children }) {
  return (
    <span className="relative group cursor-help">
      {children}
      <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block px-2 py-1 text-xs rounded bg-black text-white whitespace-nowrap">
        {text}
      </span>
    </span>
  )
}

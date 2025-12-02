import React from 'react'

export function Table({ children, className = '', ...rest }) {
  return (
    <table
      className={'w-full text-left border-collapse ' + className}
      {...rest}
    >
      {children}
    </table>
  )
}

export function TableRow({ children, className = '', ...rest }) {
  return (
    <tr className={'border-b border-gray-300 ' + className} {...rest}>
      {children}
    </tr>
  )
}

export function TableCell({ children, className = '', ...rest }) {
  return (
    <td className={'py-2 px-3 ' + className} {...rest}>
      {children}
    </td>
  )
}

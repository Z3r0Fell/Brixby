import React from 'react'
import { Routes, Route } from 'react-router-dom'
import IndexPage from '../pages/index'
import NotFoundPage from '../pages/not-found'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

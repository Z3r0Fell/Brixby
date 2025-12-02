import React from 'react'

export default function IndexPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">SnowOS v1.50 Enterprise</h1>

      <p className="text-lg opacity-80">
        Welcome to the Snow Day Prediction System.  
        Modules are active, contexts are loaded, and the UI framework is online.
      </p>

      <p className="mt-4 text-sm opacity-60">
        Use this scaffolding to plug in Prediction, Forecast, Bus Status, and Effects modules.
      </p>
    </div>
  )
}
import { useState } from 'react'

export default function useGeocode() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function lookup(location: string) {
    try {
      setLoading(true)
      setError(null)

      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        location
      )}&count=1&language=en&format=json`

      const res = await fetch(url)
      if (!res.ok) throw new Error('Failed to fetch geocode')

      const data = await res.json()
      if (!data.results?.length) throw new Error('No locations found')

      const result = data.results[0]
      return {
        name: result.name,
        lat: result.latitude,
        lon: result.longitude,
        country: result.country
      }
    } catch (err: any) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { lookup, loading, error }
}

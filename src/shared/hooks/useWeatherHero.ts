import { useState } from 'react'

export default function useWeatherHero() {
  const [loading, setLoading] = useState(false)

  async function generate(location: string) {
    setLoading(true)

    // Mocked image generation output
    await new Promise(r => setTimeout(r, 500))

    const randomId = Math.floor(Math.random() * 5) + 1

    setLoading(false)

    return {
      imageUrl: `/mock/heroes/hero_${randomId}.png`,
      location
    }
  }

  return { generate, loading }
}

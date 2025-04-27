import pako from 'pako'

export async function inflatePreset(autoPreset: string) {
  const converted = autoPreset.replace(/ /g, '+')
  const spacing = (4 - (converted.length % 4)) % 4
  const combined = `${converted}${'='.repeat(spacing)}`
  const compressed = Uint8Array.from(atob(combined), (c) => c.charCodeAt(0))

  const inflated = new TextDecoder().decode(pako.inflateRaw(compressed))

  try {
    const result = JSON.parse(inflated)
    return result
  } catch (error) {
    return null
  }
}

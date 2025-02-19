const corsProxy = 'https://api.allorigins.win/raw?url='

export async function fetchGet(url: string) {
  const response = await fetch(corsProxy + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  return data
}

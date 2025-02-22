import { useEffect, useState } from 'react'

const GA_VIEW_ID = '346033762' // Google Analytics View ID
const API_KEY = 'AIzaSyB6L3G7eTNedEIFd48uWf4qGdDWJuP0Wpw' // 'FOR_PUBLIC_API_KEY'

function VisitCounter() {
  const [visitorCount, setVisitorCount] = useState(0)

  const fetchVisitors = async () => {
    try {
      const response = await fetch(
        `https://analyticsdata.googleapis.com/v1beta/properties/${GA_VIEW_ID}:runRealtimeReport?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            dimensions: [{ name: 'country' }], // 예시: 국가별 방문자 수를 가져올 수도 있음
            metrics: [{ name: 'activeUsers' }], // 현재 활성 사용자 수
          }),
        },
      )

      if (!response.ok) {
        throw new Error('Failed to fetch visitor data')
      }

      const data = await response.json()
      const activeUsers = data.rows?.[0]?.metricValues?.[0]?.value || 0
      setVisitorCount(activeUsers)
    } catch (error) {
      console.error('Error fetching visitor data:', error)
    }
  }

  useEffect(() => {
    fetchVisitors() // 최초 실행
  }, [])

  return <div className="20px">🔥 현재 방문자 수: {visitorCount}명</div>
}

export default VisitCounter

'use client'

import { useEffect, useRef, useState } from 'react'

export default function MapPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [scale, setScale] = useState(0.7)
  const [search, setSearch] = useState('')
  const [hoveredItem, setHoveredItem] = useState()
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 })
  const [mapImage, setMapImage] = useState<HTMLImageElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const items = [
    {
      name: '자유 무역항-7',
      thumbnail:
        'https://staticwiki.biligame.com/skins/Vector/resources/common/images/bullet-icon.svg',
      position: { x: 836, y: 478 },
    },
    {
      name: '아니타 에너지 연구소',
      thumbnail:
        'https://staticwiki.biligame.com/skins/Vector/resources/common/images/bullet-icon.svg',
      position: { x: 765, y: 1180 },
    },
    {
      name: '아니타 발사 센터',
      thumbnail:
        'https://staticwiki.biligame.com/skins/Vector/resources/common/images/bullet-icon.svg',
      position: { x: 90, y: 1100 },
    },
  ]

  useEffect(() => {
    const img = new Image()
    img.src =
      'https://cdn.discordapp.com/attachments/747691288890966057/1341748033855164426/f6cf6eed4135df4f.png?ex=67b71fbb&is=67b5ce3b&hm=5fd2dfb0552e932f81675e2ac37b58263226c591522689cf708e5b43b7258c22&'

    img.onload = () => {
      setMapImage(img)
    }
  }, [])

  useEffect(() => {
    if (!mapImage) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    draw(ctx, mapImage)
  }, [mapImage, scale, hoveredItem, search, offset])

  useEffect(() => {
    const resizeCanvas = () => {
      if (containerRef.current) {
        setCanvasSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        })
      }
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const draw = (ctx: CanvasRenderingContext2D, image: HTMLImageElement) => {
    if (!canvasRef.current) return
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    ctx.drawImage(image, 0 + offset.x, 0 + offset.y, image.width * scale, image.height * scale)
    items.forEach((item) => {
      ctx.font = search === item.name ? 'bold 16px Arial' : '16px Arial'
      ctx.fillStyle = 'red'
      ctx.fillText(
        item.name,
        item.position.x * scale + offset.x,
        item.position.y * scale + offset.y,
      )
    })
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const newScale = Math.max(0.3, Math.min(1, scale - e.deltaY * 0.001))
    setScale(newScale)

    // 리프레시하여 이미지가 캔버스 외곽을 넘지 않도록 설정
    refreshOffset(newScale)
  }

  const refreshOffset = (newScale: number) => {
    if (!mapImage) return
    const maxX = Math.min(0, canvasSize.width - mapImage.width * newScale) // 좌측으로 이동 제한
    const maxY = Math.min(0, canvasSize.height - mapImage.height * newScale) // 상단으로 이동 제한
    const minX = Math.max(0, canvasSize.width - mapImage.width * newScale) // 우측으로 이동 제한
    const minY = Math.max(0, canvasSize.height - mapImage.height * newScale) // 하단으로 이동 제한

    setOffset({
      x: Math.max(maxX, Math.min(minX, offset.x)),
      y: Math.max(maxY, Math.min(minY, offset.y)),
    })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!canvasRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    setStartPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && canvasRef.current && mapImage) {
      const rect = canvasRef.current.getBoundingClientRect()
      const dx = e.clientX - rect.left - startPosition.x
      const dy = e.clientY - rect.top - startPosition.y
      const maxX = Math.min(0, canvasSize.width - mapImage.width * scale) // 좌측으로 이동 제한
      const maxY = Math.min(0, canvasSize.height - mapImage.height * scale) // 상단으로 이동 제한
      const minX = Math.max(0, canvasSize.width - mapImage.width * scale) // 우측으로 이동 제한
      const minY = Math.max(0, canvasSize.height - mapImage.height * scale) // 하단으로 이동 제한

      setOffset({
        x: Math.max(maxX, Math.min(minX, offset.x + dx)),
        y: Math.max(maxY, Math.min(minY, offset.y + dy)),
      })
      setStartPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (!canvasRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / scale
    const y = (e.clientY - rect.top) / scale

    if (mapImage) {
      const originalX = x * (mapImage.width / canvasSize.width)
      const originalY = y * (mapImage.height / canvasSize.height)
      console.log(`원본 좌표: X: ${originalX}, Y: ${originalY}`)
    }
    const clicked = items.find(
      (item) => Math.abs(item.position.x - x) < 10 && Math.abs(item.position.y - y) < 10,
    )
    if (clicked) alert(clicked.name)
  }

  const handleResizeCanvas = () => {
    if (containerRef.current) {
      containerRef.current.style.width = '1400px' // div의 크기 변경
      setCanvasSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      })
    }
  }

  return (
    <div className="w-full flex-col gap-[8px]">
      <div>개발중...</div>
      <div className="inline-flex items-center">
        <input
          type="text"
          placeholder="검색"
          value={search}
          className="p-[4px] border inline-flex"
          onChange={(e) => setSearch(e.target.value)}
        />
        {Math.round(scale * 100)}%
      </div>
      <hr />
      <div ref={containerRef} style={{ width: '100%', height: '600px' }}>
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={handleClick}
          style={{ display: 'block', width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}

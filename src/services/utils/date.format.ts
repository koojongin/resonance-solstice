export const formatSecondsToTime = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600) // 1시간은 3600초
  const minutes = Math.floor((totalSeconds % 3600) / 60) // 남은 초에서 분 계산
  const seconds = totalSeconds % 60 // 남은 초 계산

  // 시간 형식에 따라 분:초 또는 시:분:초 반환
  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

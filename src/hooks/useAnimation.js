import { useState, useCallback } from 'react'

// 애니메이션 상태 및 속도 제어 커스텀 훅
export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev)
  }, [])

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed)
  }, [])

  return { isPlaying, speed, toggle, changeSpeed }
}

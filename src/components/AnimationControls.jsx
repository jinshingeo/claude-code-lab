// 애니메이션 제어 UI 컴포넌트 (재생/정지, 속도 조절)
function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  const speeds = [
    { label: '느리게', value: 0.5 },
    { label: '보통', value: 1 },
    { label: '빠르게', value: 2 },
    { label: '매우 빠르게', value: 3 },
  ]

  return (
    <div className="controls">
      {/* 재생/정지 버튼 */}
      <button
        className="play-btn"
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 재생'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 재생'}
      </button>

      {/* 속도 조절 버튼 그룹 */}
      <div className="speed-controls" role="group" aria-label="재생 속도 선택">
        <span className="speed-label">속도</span>
        {speeds.map(({ label, value }) => (
          <button
            key={value}
            className={`speed-btn ${speed === value ? 'active' : ''}`}
            onClick={() => onSpeedChange(value)}
            aria-pressed={speed === value}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AnimationControls

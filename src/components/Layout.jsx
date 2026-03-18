import DancingCat from './DancingCat'
import AnimationControls from './AnimationControls'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/layout.css'

// 페이지 전체 레이아웃 컴포넌트
function Layout() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation()

  return (
    <main className="layout">
      <h1 className="title">🐱 Dancing Cat 🐱</h1>
      <p className="subtitle">클릭해서 고양이를 춤추게 하세요!</p>

      {/* 고양이 클릭 및 키보드(Space, Enter)로도 재생/정지 가능 */}
      <div
        onClick={toggle}
        onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && toggle()}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? '고양이 클릭하여 정지' : '고양이 클릭하여 재생'}
        style={{ cursor: 'pointer', outline: 'none' }}
      >
        <DancingCat isPlaying={isPlaying} speed={speed} />
      </div>

      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onToggle={toggle}
        onSpeedChange={changeSpeed}
      />
    </main>
  )
}

export default Layout

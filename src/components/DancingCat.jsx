import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

// 고양이 춤 애니메이션 메인 컴포넌트
function DancingCat({ isPlaying, speed }) {
  // 속도에 따른 애니메이션 재생 속도 계산
  const duration = `${1.2 / speed}s`

  const style = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: duration,
  }

  return (
    <div className="cat-stage">
      {/* 배경 별빛 효과 */}
      <div className="stars">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="star"
            style={{ animationDelay: `${i * 0.3}s`, animationPlayState: isPlaying ? 'running' : 'paused' }}
          >
            ✨
          </span>
        ))}
      </div>

      {/* 고양이 이미지 */}
      <div className="cat-wrapper" style={style}>
        <img
          src={catSvg}
          alt="춤추는 고양이"
          className="cat-image"
          draggable={false}
        />
      </div>

      {/* 바닥 그림자 */}
      <div
        className="cat-shadow"
        style={{ animationPlayState: isPlaying ? 'running' : 'paused', animationDuration: duration }}
      />

      {/* 음표 효과 */}
      <div className="music-notes">
        {['♪', '♫', '♩', '♬'].map((note, i) => (
          <span
            key={i}
            className="note"
            style={{ animationDelay: `${i * 0.5}s`, animationPlayState: isPlaying ? 'running' : 'paused' }}
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  )
}

export default DancingCat

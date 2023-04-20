import React, { useEffect, useRef, useState } from 'react'
import Styles from './shy-ball-styles.scss'

const ShyBall: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ballRef = useRef<HTMLDivElement>(null)

  const setInitialBallPosition = (): void => {
    const parentWidth = ballRef.current?.parentElement?.offsetWidth ?? 0
    const parentHeigth = ballRef.current?.parentElement?.offsetHeight ?? 0

    const y = parentHeigth / 2 - 25
    const x = parentWidth / 2 + 25

    setPosition({ x, y })
  }

  useEffect(() => {
    setInitialBallPosition()
  }, [])

  const handleMouseEnter = (): void => {
    const { offsetWidth, offsetHeight } = ballRef.current!
    const maxX = ballRef.current!.parentElement!.offsetWidth - offsetWidth
    const maxY = ballRef.current!.parentElement!.offsetHeight - offsetHeight

    const x = Math.floor(Math.random() * maxX)
    const y = Math.floor(Math.random() * maxY)

    setPosition({ x, y })
  }

  const ballStyle = {
    left: position.x,
    top: position.y,
    transition: 'left 1s, top 1s'
  }

  return (
    <div className={Styles.contentWrap}>
      <div
        ref={ballRef}
        onMouseEnter={handleMouseEnter}
        className={Styles.ball}
        style={ballStyle}
      ></div>
    </div>
  )
}

export default ShyBall

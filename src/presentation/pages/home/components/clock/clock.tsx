import Styles from './clock-styles.scss'

import React, { useState } from 'react'

interface ClockState {
  time: string
}

const formatDateString = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
}

const Clock: React.FC = () => {
  const [state, setState] = useState<ClockState>({ time: '' })

  const updateTime = (): void => {
    setState({ time: formatDateString(new Date()) })
  }

  setInterval(updateTime, 500)

  return (
    <div className={Styles.contentWrap}>
      <span className={Styles.time}>{state.time}</span>
    </div>
  )
}

export default Clock

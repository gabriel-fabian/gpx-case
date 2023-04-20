import Styles from './clock-styles.scss'

import React, { useState } from 'react'

interface ClockState {
  time: string
}

// Recebe um valor de Date e retorna no padrão xx:zz:yy
const formatDateString = (date: Date): string => {
  /* Aqui foi utilizada a função específica de Date para resgatar os valores de hora, minuto, segundo
   como o retorno é um number, foi necessária a transformação para string e a utilização do padStart()
   de forma que sempre haja dois valores */
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

  // Roda o updateTime a cada 500ms
  setInterval(updateTime, 500)

  return (
    <div className={Styles.contentWrap}>
      <span className={Styles.time}>{state.time}</span>
    </div>
  )
}

export default Clock

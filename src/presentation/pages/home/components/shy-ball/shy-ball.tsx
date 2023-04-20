import React, { useEffect, useRef, useState } from 'react'
import Styles from './shy-ball-styles.scss'

const ShyBall: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Utilização de useRef para conseguir referenciar o elemento da bola após sua criação
  const ballRef = useRef<HTMLDivElement>(null)

  const setInitialBallPosition = (): void => {
    // Pega o width e height do elemento pai da bola
    const parentWidth = ballRef.current?.parentElement?.offsetWidth ?? 0
    const parentHeigth = ballRef.current?.parentElement?.offsetHeight ?? 0

    // Encontra o centro do elemento pai, considerando o height e width da bola
    const y = parentHeigth / 2 - 25
    const x = parentWidth / 2 + 25

    setPosition({ x, y })
  }

  // Executa uma única vez para centralizar a bola no componente
  useEffect(() => {
    setInitialBallPosition()
  }, [])

  const handleMouseEnter = (): void => {
    /*
      Calcula a área limite para que a bola não ultrapasse os limites do componente,
      para isso são pegues o width e height do parent e removidos o tamanho da bola
    */
    const { offsetWidth, offsetHeight } = ballRef.current!
    const maxX = ballRef.current!.parentElement!.offsetWidth - offsetWidth
    const maxY = ballRef.current!.parentElement!.offsetHeight - offsetHeight

    // Gera posições aleatórias com base nos limites definidos acima
    const x = Math.floor(Math.random() * maxX)
    const y = Math.floor(Math.random() * maxY)

    setPosition({ x, y })
  }

  /*
    Para definição dinâmica de styles baseados nos valores do componente foi
    criada essa classe
  */
  const ballStyle = {
    left: position.x,
    top: position.y,
    transition: 'left 1s, top 1s'
  }

  return (
    <div className={Styles.contentWrap}>
      <div
        // Adicionado a referência criada anteriormente para o componente da bola
        ref={ballRef}
        onMouseEnter={handleMouseEnter}
        className={Styles.ball}
        style={ballStyle}
      ></div>
    </div>
  )
}

export default ShyBall

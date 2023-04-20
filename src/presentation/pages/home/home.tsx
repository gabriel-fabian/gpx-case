import Styles from './home-styles.scss'
import Clock from './components/clock/clock'
import ItemSelector from './components/item-selector/item-selector'
import ShyBall from './components/shy-ball/shy-ball'

import React from 'react'

const Home: React.FC = () => {
  return (
    <div className={Styles.contentWrap}>
      <div className={Styles.leftPanel}>
        <Clock />
        <ItemSelector />
      </div>
      <div className={Styles.rightPanel}>
        <ShyBall />
      </div>
    </div>
  )
}

export default Home

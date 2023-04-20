import Styles from './home-styles.scss'
import Clock from './components/clock/clock'
import ItemSelector from './components/item-selector/item-selector'

import React from 'react'

const Home: React.FC = () => {
  return (
    <div className={Styles.contentWrap}>
      <div className={Styles.leftPanel}>
        <Clock />
        <ItemSelector />
      </div>
    </div>
  )
}

export default Home

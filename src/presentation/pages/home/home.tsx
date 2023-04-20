import Styles from './home-styles.scss'
import Clock from './components/clock/clock'

import React from 'react'

const Home: React.FC = () => {
  return (
    <div className={Styles.contentWrap}>
      <Clock />
    </div>
  )
}

export default Home

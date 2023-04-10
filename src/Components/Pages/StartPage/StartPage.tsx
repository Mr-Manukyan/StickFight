import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import { Content } from './Content/Content'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import bigScreen from '../../../Assets/backgrounds/background2.jpg'
import smallScreen from '../../../Assets/backgrounds/background3.jpg'

import style from './StartPage.module.css'

export const StartPage = () => {
  const screenWidth = window.innerWidth
  return (
    <AnimatedPage>
      <div
        className={style.container}
        style={{
          backgroundImage:
            screenWidth < 579 ? `url(${smallScreen})` : `url(${bigScreen})`,
        }}
      >
        <Header />
        <Content />
        <Footer />
      </div>
    </AnimatedPage>
  )
}

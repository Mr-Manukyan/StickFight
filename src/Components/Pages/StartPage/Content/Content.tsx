import { useContext } from 'react'
import style from './Content.module.css'
import { LanguageContext } from '../../../Common/LanguageProvider/LanguageProvider'
import { StartButton } from '../../../Common/StartButton/StartButton'
import stickBox from '../../../../Assets/icons/stickBox.png'

export const Content = () => {
  const { dictionary } = useContext(LanguageContext)
  const buttonName = dictionary.buttonName
  const paragraph = dictionary.paragraph

  return (
    <div className={style.container}>
      <div className={style.paragraphWrapper}>
        <h1 className={style.paragraph}>{paragraph}</h1>
      </div>

      <StartButton name={buttonName} />
      <div className={style.stickWrapper}>
        <div className={style.stick}>
          <img src={stickBox} alt='stick' className={style.stickBox} />
        </div>
      </div>
    </div>
  )
}

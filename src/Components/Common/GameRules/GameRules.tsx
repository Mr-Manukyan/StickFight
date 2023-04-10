import { useContext } from 'react'
import style from './GameRules.module.css'
import { LanguageContext } from '../LanguageProvider/LanguageProvider'

export const GameRules = () => {
  const { dictionary } = useContext(LanguageContext)
  const rules = dictionary.rules
  const rulesText = dictionary.rulesText

  return (
    <div className={style.container}>
      <h3 className={style.paragraph}>{rules}</h3>
      <p className={style.text}>{rulesText}</p>
    </div>
  )
}

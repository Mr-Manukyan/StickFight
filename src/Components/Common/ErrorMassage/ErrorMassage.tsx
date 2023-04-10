import { useContext } from 'react'
import style from './ErrorMassage.module.css'
import { LanguageContext } from '../LanguageProvider/LanguageProvider'

export const ErrorMassage: React.FC = () => {
  const { dictionary } = useContext(LanguageContext)
  const errorMassage = dictionary.errorMassage
  const errorParagraph = dictionary.errorParagraph

  return (
    <div className={style.errorMassageWrapper}>
      <h3 className={style.paragraph}>{errorParagraph}</h3>
      <p className={style.errorText}>{errorMassage}</p>
    </div>
  )
}

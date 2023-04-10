import arm from './arm.json'
import ru from './ru.json'
import en from './en.json'
import flagArm from '../../../Assets/icons/flagArm.png'
import flagRu from '../../../Assets/icons/flagRu.png'
import flagEn from '../../../Assets/icons/flagEn.png'

export type DictionaryListType = {
  buttonName: string
  paragraph: string
  rules: string
  rulesText: string
  takeButtonText: string
  playerName: string
  errorMassage: string
  errorParagraph: string
  playerStep: string
  winner: string
}

export type DictionaryListLanguageType = {
  arm: DictionaryListType
  ru: DictionaryListType
  en: DictionaryListType
}
export const dictionaryList: DictionaryListLanguageType = { arm, ru, en }

export type LanguageOptionsType = {
  arm: string
  en: string
  ru: string
}
export const languageOptions: LanguageOptionsType = {
  arm: flagArm,
  en: flagEn,
  ru: flagRu,
}

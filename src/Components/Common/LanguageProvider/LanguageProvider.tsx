import React, { useState, createContext, ReactNode } from 'react'
import { DictionaryListType,languageOptions,dictionaryList} from '../Languages/language'


type ProviderType = {
  languageFlag : string
  dictionary: DictionaryListType
  languageChange: (selected:string,flag:string) => void
  language: string,
}

export type LanguageContextType = {
  language : string
  dictionary : DictionaryListType
  languageFlag : string
  languageChange: (selected:string,flag:string) => void
}

// create the language context with default selected language
const defaultContext:LanguageContextType = {
  language: 'ru',
  dictionary: dictionaryList.ru,
  languageFlag : languageOptions.ru ,
  languageChange : (selected : string,flag : string) => {}
}

export const LanguageContext = createContext(defaultContext)

// it provides the language context to app

type PropsType = {
  children : ReactNode
}
type languageType = keyof typeof dictionaryList

export const LanguageProvider:React.FC<PropsType> = React.memo(({ children }) => {

  const defaultLanguage = window.sessionStorage.getItem('lang')
  const defaultLanguageFlag = window.sessionStorage.getItem('flag')
  const [language, setLanguage] = useState(defaultLanguage || 'ru')
  const [languageFlag,setLanguageFlag] = useState(defaultLanguageFlag || languageOptions.ru)

  const provider:ProviderType = {
    language: 'ru',
    languageFlag : languageFlag,
    dictionary: dictionaryList[language as languageType],
    languageChange: (selected : string,flag : string) => {
      const newLanguage = languageOptions[selected as languageType] ? selected : 'ru'
      setLanguage(newLanguage);
      window.sessionStorage.setItem('lang', newLanguage)
      window.sessionStorage.setItem('flag',flag)
      setLanguageFlag(flag)
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
})


import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import style from './ChooseLanguage.module.css'
import { LanguageContext } from '../LanguageProvider/LanguageProvider'
import { languageOptions } from '../Languages/language'

const active = {
  initial: {
    opacity: 0,
    height: '0px',
  },
  animate: {
    opacity: 1,
    height: '290%',
  },
}
const noActive = {
  initial: {
    opacity: 0,
    height: '0px',
  },
  animate: {
    opacity: 0,
    height: '0px',
  },
}
const activeFlag = {
  initial: {
    scale: 0,
    opacity: 0,
  },

  animate: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
    },
  }),
}

const noActiveFlag = {
  initial: {
    scale: 0,
    opacity: 0,
  },

  animate: {
    scale: 0,
    opacity: 0,
  },
}

export const ChooseLanguage = React.memo(() => {
  const { languageChange, languageFlag } = useContext(LanguageContext)
  const [show, setShow] = useState(false)

  const handleLanguageChange = (id: string, img: string) => {
    languageChange(id, img)
    setShow(false)
  }

  return (
    <div className={style.languageContainer}>
      <div className={style.container} onClick={() => setShow(show => !show)}>
        <span className={show ? style.arrow : ''}></span>
        <img
          src={languageFlag}
          className={style.defaultLanguageImg}
          alt={'flag'}
        />
      </div>
      <motion.div
        className={style.body}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={show ? active : noActive}
        transition={{ duration: 0.3 }}
      >
        {Object.entries(languageOptions).map(([id, img], index) => (
          <motion.div
            className={style.items}
            key={id}
            onClick={() => handleLanguageChange(id, img)}
            layoutId={String(id)}
            variants={show ? activeFlag : noActiveFlag}
            initial='initial'
            animate='animate'
            transition={{ duration: 0.3 }}
            custom={index + 0.5}
          >
            <img src={img} className={style.flagIcon} alt='flag' />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
})

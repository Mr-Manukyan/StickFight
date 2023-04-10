import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { GameLogo } from '../../../Common/GameIcon/GameILogo'
import style from './Header.module.css'
import language from '../../../../Assets/icons/language.png'
import infoIcon from '../../../../Assets/icons/infoButton.png'
import { LanguageSelector } from '../../../Common/LanguageSelector/LanguageSelector'
import { Modal } from '../../../Common/Modal/Modal'
import { GameRules } from '../../../Common/GameRules/GameRules'

export const Header = () => {
  const [isShowInfoModal, setIsShowInfoModal] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isShowInfoModal && (
          <Modal setIsShow={setIsShowInfoModal}>
            <GameRules />
          </Modal>
        )}
      </AnimatePresence>
      <div className={style.container}>
        <img
          src={infoIcon}
          alt='infoIcon'
          className={style.infoIcon}
          onClick={() => setIsShowInfoModal(true)}
        />
        <GameLogo />
        <div className={style.languageContainer}>
          <LanguageSelector />
          <img src={language} alt='languageIcon' className={style.language} />
        </div>
      </div>
    </>
  )
}

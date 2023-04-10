import React, { ReactNode } from 'react'
import style from './Modal.module.css'
import { motion } from 'framer-motion'
import backIcon from '../../../Assets/icons/arrow1.png'

type PropsType = {
  children: ReactNode
  setIsShow: (isShow: boolean) => void
  zIndex?: number
}

export const Modal: React.FC<PropsType> = React.memo(
  ({ children, setIsShow, zIndex = 2 }) => {
    return (
      <div className={style.modalContainer} style={{ zIndex }}>
        <motion.div
          className={style.body}
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={backIcon}
            alt='backIcon'
            className={style.backIcon}
            onClick={() => setIsShow(false)}
          />

          {children}
        </motion.div>
      </div>
    )
  }
)

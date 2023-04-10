import { motion } from 'framer-motion'
import style from './Stick.module.css'
import stickIcon from '../../../../Assets/icons/stick.png'
import stickActive from '../../../../Assets/icons/white-stick.png'
import { useAppDispatch } from '../../../../Hooks/hooks'
import { StickType } from '../../../../Types/GameTypes'
import { gameActions } from '../../../../Redux/Reducers/GameReducer'
import { memo, useState } from 'react'

const active = {
  initial: {
    opacity: 1,
    y: '0px',
  },
  animate: {
    opacity: 1,
    y: '-30px',
  },
}
const noActive = {
  initial: {
    opacity: 1,
    y: '0px',
  },
  animate: {
    opacity: 1,
    y: '0px',
  },
}

type PropsType = {
  stick: StickType
  sticksID1Length: number
  sticksID2Length: number
  sticksID3Length: number
  setShowModal: (show: boolean) => void
}

export const Stick: React.FC<PropsType> = memo(
  ({
    stick,
    sticksID1Length,
    sticksID2Length,
    sticksID3Length,
    setShowModal,
  }) => {
    const [isActive, setIsActive] = useState(false)
    const dispatch = useAppDispatch()
    const chooseStick = () => {
      if (
        stick.id === 1 ||
        stick.id === 2 ||
        stick.id === 3 ||
        stick.id === 4 ||
        stick.id === 5
      ) {
        if (!sticksID2Length && !sticksID3Length) {
          setIsActive(isActive => !isActive)
          dispatch(gameActions.setSticks1ID(stick.id, isActive))
        } else {
          setShowModal(true)
        }
      }
      if (stick.id === 6 || stick.id === 7 || stick.id === 8) {
        if (!sticksID1Length && !sticksID3Length) {
          setIsActive(isActive => !isActive)
          dispatch(gameActions.setSticks2ID(stick.id, isActive))
        } else {
          setShowModal(true)
        }
      }

      if (
        stick.id === 9 ||
        stick.id === 10 ||
        stick.id === 11 ||
        stick.id === 12 ||
        stick.id === 13 ||
        stick.id === 14 ||
        stick.id === 15
      ) {
        if (!sticksID1Length && !sticksID2Length) {
          setIsActive(isActive => !isActive)
          dispatch(gameActions.setSticks3ID(stick.id, isActive))
        } else {
          setShowModal(true)
        }
      }
    }

    return (
      <motion.div
        className={style.stickWrapper}
        onClick={chooseStick}
        initial='initial'
        animate='animate'
        variants={isActive ? active : noActive}
        transition={{ duration: 0.3 }}
        key={stick.id}
        exit={{ opacity: 0, y: '-100%' }}
        layoutId={String(stick.id)}
      >
        <img
          src={isActive ? stickActive : stickIcon}
          alt='stickIcon'
          className={style.stick}
        />
      </motion.div>
    )
  }
)

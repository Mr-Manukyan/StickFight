import React from 'react'
import style from './ModalWin.module.css'
import { motion } from 'framer-motion'
import fireworks from '../../../Assets/gif/fireworks.gif'
import { useAppDispatch } from '../../../Hooks/hooks'
import { gameActions } from '../../../Redux/Reducers/GameReducer'

type PropsType = {
  player: number
  winner: string
  buttonName: string
  zIndex?: number
}

export const ModalWin: React.FC<PropsType> = React.memo(
  ({ zIndex = 2, player, winner, buttonName }) => {
    const dispatch = useAppDispatch()

    const restartGame = () => {
      dispatch(gameActions.setRestart())
      dispatch(gameActions.setPlayer(1))
    }

    return (
      <div className={style.modalContainer} style={{ zIndex }}>
        <motion.div
          className={style.body}
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.3 }}
        >
          <img src={fireworks} alt='fireworks' className={style.fireworks} />
          <div className={style.winWrapper}>
            <p className={style.paragraph}>{winner}</p>
            <p className={style.player}>{player}</p>
          </div>
          <div className={style.buttonWrapper}>
            <button className={style.button} onClick={restartGame}>
              {buttonName}
            </button>
          </div>
        </motion.div>
      </div>
    )
  }
)

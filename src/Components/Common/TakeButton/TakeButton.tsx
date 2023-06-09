import { useContext } from 'react'
import style from './TakeButton.module.css'
import { motion } from 'framer-motion'
import handIcon from '../../../Assets/icons/hand.png'
import { LanguageContext } from '../LanguageProvider/LanguageProvider'
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks'
import { gameActions } from '../../../Redux/Reducers/GameReducer'
import { getPlayer } from '../../../Redux/Selectors/GameSelectors'

export const TakeButton = () => {
  const { dictionary } = useContext(LanguageContext)
  const buttonName = dictionary.takeButtonText
  const player = useAppSelector(getPlayer)
  const dispatch = useAppDispatch()

  const removeStisksHandler = () => {
    dispatch(gameActions.removeSticks())
    dispatch(gameActions.removeSticksID())
    if (player === 1) {
      dispatch(gameActions.setPlayer(2))
    } else if (player === 2) {
      dispatch(gameActions.setPlayer(1))
    }
  }

  return (
    <motion.div
      className={style.handIconWrapper}
      initial={{ opacity: 0, y: '-70px' }}
      animate={{ opacity: 1, y: '0px' }}
      exit={{ opacity: 0, y: '-70px' }}
      transition={{ duration: 0.3 }}
      onClick={removeStisksHandler}
    >
      <img src={handIcon} alt='handIcon' className={style.handIcon} />
      <div className={style.textWrapper}>
        <p className={style.text}>{buttonName}</p>
      </div>
    </motion.div>
  )
}

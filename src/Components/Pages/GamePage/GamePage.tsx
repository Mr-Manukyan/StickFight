import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import style from './GamePage.module.css'
import { GameZone } from './GameZone/GameZone'
import homeIcon from '../../../Assets/icons/homeButton.png'
import restartIcon from '../../../Assets/icons/restart.png'
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks'
import { gameActions } from '../../../Redux/Reducers/GameReducer'
import { LanguageContext } from '../../Common/LanguageProvider/LanguageProvider'
import { useSelector } from 'react-redux'
import {
  getAllStick1,
  getAllStick2,
  getAllStick3,
  getPlayer,
} from '../../../Redux/Selectors/GameSelectors'

const GamePage = () => {
  const { dictionary } = useContext(LanguageContext)
  const playerStep = dictionary.playerStep

  const sticks1 = useAppSelector(getAllStick1)
  const sticks2 = useAppSelector(getAllStick2)
  const sticks3 = useAppSelector(getAllStick3)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const player = useSelector(getPlayer)

  const goToHomePage = () => {
    navigate('/')
  }

  const restart = () => {
    dispatch(gameActions.setRestart())
    dispatch(gameActions.removeSticksID())
    dispatch(gameActions.setPlayer(1))
  }

  const showPlayerStepBox = sticks1.length + sticks2.length + sticks3.length

  return (
    <AnimatedPage>
      <div className={style.container}>
        <div className={style.headerBody}>
          <div className={style.homeIconWrapper} onClick={goToHomePage}>
            <img src={homeIcon} alt='homeIcon' className={style.homeIcon} />
          </div>
          {showPlayerStepBox && (
            <div className={style.stepWrapper}>
              <p className={style.paragraph}>{playerStep}</p>
              <p className={style.player}>{player}</p>
            </div>
          )}

          <div className={style.restartIconWrapper} onClick={restart}>
            <img
              src={restartIcon}
              alt='restartIcon'
              className={style.restartIcon}
            />
          </div>
        </div>

        <GameZone />
      </div>
    </AnimatedPage>
  )
}

export default GamePage

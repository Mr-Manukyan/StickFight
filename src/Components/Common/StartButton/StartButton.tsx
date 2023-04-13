import { useNavigate } from 'react-router-dom'
import style from './StartButton.module.css'
import buttonIcon from '../../../Assets/icons/startButton.png'
import { useAppDispatch } from '../../../Hooks/hooks'
import { gameActions } from '../../../Redux/Reducers/GameReducer'

type PropsType = {
  name: string
}

export const StartButton: React.FC<PropsType> = ({ name }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const goToGameZone = () => {
    dispatch(gameActions.setRestart())
    dispatch(gameActions.removeSticksID())
    dispatch(gameActions.setPlayer(1))
    navigate('/game')
  }

  return (
    <div className={style.container} onClick={goToGameZone}>
      <img src={buttonIcon} alt='startButton' className={style.buttonIcon} />
      <p className={style.buttonName}>{name}</p>
    </div>
  )
}

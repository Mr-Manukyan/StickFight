import { useNavigate } from 'react-router-dom'
import style from './StartButton.module.css'
import buttonIcon from '../../../Assets/icons/startButton.png'

type PropsType = {
  name: string
}

export const StartButton: React.FC<PropsType> = ({ name }) => {
  const navigate = useNavigate()
  const goToGameZone = () => {
    navigate('/game')
  }

  return (
    <div className={style.container} onClick={goToGameZone}>
      <img src={buttonIcon} alt='startButton' className={style.buttonIcon} />
      <p className={style.buttonName}>{name}</p>
    </div>
  )
}

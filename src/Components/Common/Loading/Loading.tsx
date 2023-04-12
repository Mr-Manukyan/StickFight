import style from './Loading.module.css'
import logoIcon from '../../../Assets/icons/logo.png'

export const Loading = () => {
  return (
    <div className={style.container}>
      <img src={logoIcon} alt='logoIcon' className={style.logoIcon} />
    </div>
  )
}

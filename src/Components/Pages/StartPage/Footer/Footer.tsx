import style from './Footer.module.css'
import homeButtonIcon from '../../../../Assets/icons/homeButton.png'

export const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.homeButtonIconWrapper}>
        <img
          src={homeButtonIcon}
          alt='homeButtonIcon'
          className={style.homeButtonIcon}
        />
      </div>
    </div>
  )
}

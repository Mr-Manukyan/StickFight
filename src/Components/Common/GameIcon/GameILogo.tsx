import style from './GameLogo.module.css'
import logo from '../../../Assets/icons/logo.png'

export const GameLogo = () => {
  return (
    <div className = {style.container}>
       <img className = {style.logo} src = {logo} alt = 'gameIcon'/>
    </div>
  )
}


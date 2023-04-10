import React, { useContext, useState } from "react"
import style from "./LanguageSelector.module.css"
import { LanguageContext } from "../LanguageProvider/LanguageProvider"
import { languageOptions } from "../Languages/language"



export const LanguageSelector = React.memo(() => {

  const { languageChange, languageFlag } = useContext(LanguageContext);
  const [show, setShow] = useState(false)


  const handleLanguageChange = (id:string, img: string) => {
    languageChange(id, img)
    setShow(false)
  }

  return (

    <div className={style.languageContainer}>
      <div className={style.container} onClick={() => setShow((show) => !show)}>
        <span className={show ? style.arrow : style.noArrow}></span>
        <img src={languageFlag} className={style.defaultLanguageImg} alt={"flag"} />
      </div>
      <div className={show ? style.showBody : style.body}>

        {Object.entries(languageOptions).map(([id, img]) => (
          <div className={show ? style.showItems : style.items}
            key={id} onClick={() => handleLanguageChange(id, img)}>
            <img src={img} className={style.flagIcon} alt="flag" />
          </div>
        ))}
      </div>
    </div>
  )
})



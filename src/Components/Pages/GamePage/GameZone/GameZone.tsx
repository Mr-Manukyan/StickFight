import { useContext } from 'react'
import { useAppSelector } from '../../../../Hooks/hooks'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import {
  getAllStick1,
  getAllStick2,
  getAllStick3,
  getPlayer,
  getSickets1ID,
  getSickets2ID,
  getSickets3ID,
} from '../../../../Redux/Selectors/GameSelectors'
import { Stick } from '../Stick/Stick'
import style from './GameZone.module.css'
import { TakeButton } from '../../../Common/TakeButton/TakeButton'
import { useState } from 'react'
import { Modal } from '../../../Common/Modal/Modal'
import { ErrorMassage } from '../../../Common/ErrorMassage/ErrorMassage'
import { ModalWin } from '../../../Common/ModalWin/ModalWin'
import { LanguageContext } from '../../../Common/LanguageProvider/LanguageProvider'

type PropsType = {}

export const GameZone: React.FC<PropsType> = ({}) => {
  const [showModal, setShowModal] = useState(false)

  const sticks1 = useAppSelector(getAllStick1)
  const sticks2 = useAppSelector(getAllStick2)
  const sticks3 = useAppSelector(getAllStick3)

  const sticks1ID = useAppSelector(getSickets1ID)
  const sticks2ID = useAppSelector(getSickets2ID)
  const sticks3ID = useAppSelector(getSickets3ID)

  const player = useAppSelector(getPlayer)
  const { dictionary } = useContext(LanguageContext)
  const winner = dictionary.winner
  const buttonName = dictionary.buttonName
  const win = sticks1.length + sticks2.length + sticks3.length

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <Modal setIsShow={setShowModal}>
            <ErrorMassage />
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {win === 0 && (
          <ModalWin player={player} winner={winner} buttonName={buttonName} />
        )}
      </AnimatePresence>
      <LayoutGroup>
        <motion.div
          className={style.container}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        >
          <AnimatePresence>
            {sticks1ID.length || sticks2ID.length || sticks3ID.length ? (
              <TakeButton />
            ) : null}
          </AnimatePresence>

          <div className={style.stick1Wrapper}>
            <AnimatePresence>
              {sticks1.map(stick => (
                <Stick
                  key={stick.id}
                  stick={stick}
                  sticksID1Length={sticks1ID.length}
                  sticksID2Length={sticks2ID.length}
                  sticksID3Length={sticks3ID.length}
                  setShowModal={setShowModal}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className={style.stick2Wrapper}>
            <AnimatePresence>
              {sticks2.map(stick => (
                <Stick
                  key={stick.id}
                  stick={stick}
                  sticksID1Length={sticks1ID.length}
                  sticksID2Length={sticks2ID.length}
                  sticksID3Length={sticks3ID.length}
                  setShowModal={setShowModal}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className={style.stick3Wrapper}>
            <AnimatePresence>
              {sticks3.map(stick => (
                <Stick
                  key={stick.id}
                  stick={stick}
                  sticksID1Length={sticks1ID.length}
                  sticksID2Length={sticks2ID.length}
                  sticksID3Length={sticks3ID.length}
                  setShowModal={setShowModal}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </LayoutGroup>
    </>
  )
}

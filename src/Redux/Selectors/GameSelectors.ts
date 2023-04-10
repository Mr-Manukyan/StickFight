import { AppStateType } from '../Store/store'

export const getAllStick1 = (state: AppStateType) => {
  return state.gamePage.sticks1
}
export const getAllStick2 = (state: AppStateType) => {
  return state.gamePage.sticks2
}
export const getAllStick3 = (state: AppStateType) => {
  return state.gamePage.sticks3
}

export const getSickets1ID = (state: AppStateType) => {
  return state.gamePage.sticks1ID
}

export const getSickets2ID = (state: AppStateType) => {
  return state.gamePage.sticks2ID
}

export const getSickets3ID = (state: AppStateType) => {
  return state.gamePage.sticks3ID
}

export const getPlayer = (state: AppStateType) => {
  return state.gamePage.player
}

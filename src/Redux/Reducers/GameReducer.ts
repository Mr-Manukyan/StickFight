import { InferActionsTypes } from '../Store/store'
import { StickType } from '../../Types/GameTypes'

const REMOVE_STICKS = 'APP/GAME/REMOVE_STICKS'
const REMOVE_STICKS_ID = 'APP/GAME/REMOVE_STICKS_ID'
const SET_PLAYER = 'APP/GAME/SET_PLAYER'
const SET_RESTART = 'APP/GAME/SET_RESTART'
const SET_STICK_1_IDS = 'APP/GAME/SET_STICK_1_IDS'
const SET_STICK_2_IDS = 'APP/GAME/SET_STICK_2_IDS'
const SET_STICK_3_IDS = 'APP/GAME/SET_STICK_3_IDS'

const sticks1 = [
  { id: 1, isActive: false },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
  { id: 4, stick: 4, isActive: false },
  { id: 5, stick: 5, isActive: false },
]
const sticks2 = [
  { id: 6, isActive: false },
  { id: 7, isActive: false },
  { id: 8, isActive: false },
]
const sticks3 = [
  { id: 9, isActive: false },
  { id: 10, isActive: false },
  { id: 11, isActive: false },
  { id: 12, isActive: false },
  { id: 13, isActive: false },
  { id: 14, isActive: false },
  { id: 15, isActive: false },
]

const restart1 = [
  { id: 1, isActive: false },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
  { id: 4, stick: 4, isActive: false },
  { id: 5, stick: 5, isActive: false },
]
const restart2 = [
  { id: 6, isActive: false },
  { id: 7, isActive: false },
  { id: 8, isActive: false },
]
const restart3 = [
  { id: 9, isActive: false },
  { id: 10, isActive: false },
  { id: 11, isActive: false },
  { id: 12, isActive: false },
  { id: 13, isActive: false },
  { id: 14, isActive: false },
  { id: 15, isActive: false },
]

type initialStateType = typeof initialState

const initialState = {
  sticks1: sticks1 as StickType[],
  sticks2: sticks2 as StickType[],
  sticks3: sticks3 as StickType[],
  sticks1ID: [] as number[],
  sticks2ID: [] as number[],
  sticks3ID: [] as number[],
  player: 1,
}

export const gameReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case SET_STICK_1_IDS:
      return {
        ...state,
        sticks1ID: state.sticks1ID.includes(action.id)
          ? state.sticks1ID.filter(id => id !== action.id)
          : [...state.sticks1ID, action.id],
      }

    case SET_STICK_2_IDS:
      return {
        ...state,
        sticks2ID: state.sticks2ID.includes(action.id)
          ? state.sticks2ID.filter(id => id !== action.id)
          : [...state.sticks2ID, action.id],
      }

    case SET_STICK_3_IDS:
      return {
        ...state,
        sticks3ID: state.sticks3ID.includes(action.id)
          ? state.sticks3ID.filter(id => id !== action.id)
          : [...state.sticks3ID, action.id],
      }

    case REMOVE_STICKS:
      return {
        ...state,
        sticks1: state.sticks1.filter(
          stick => !action.stickIDS1.includes(stick.id)
        ),
        sticks2: state.sticks2.filter(
          stick => !action.stickIDS2.includes(stick.id)
        ),
        sticks3: state.sticks3.filter(
          stick => !action.stickIDS3.includes(stick.id)
        ),
      }

    case REMOVE_STICKS_ID:
      return {
        ...state,
        sticks1ID: [],
        sticks2ID: [],
        sticks3ID: [],
      }

    case SET_PLAYER:
      return {
        ...state,
        player: action.player,
      }

    case SET_RESTART:
      return {
        ...state,
        sticks1: restart1,
        sticks2: restart2,
        sticks3: restart3,
      }

    default:
      return state
  }
}

//Action Creators

export const gameActions = {
  setSticks1ID: (id: number, isActive: boolean) =>
    ({
      type: SET_STICK_1_IDS,
      id,
      isActive,
    } as const),

  setSticks2ID: (id: number, isActive: boolean) =>
    ({
      type: SET_STICK_2_IDS,
      id,
      isActive,
    } as const),

  setSticks3ID: (id: number, isActive: boolean) =>
    ({
      type: SET_STICK_3_IDS,
      id,
      isActive,
    } as const),

  removeSticks: (
    stickIDS1: number[],
    stickIDS2: number[],
    stickIDS3: number[]
  ) =>
    ({
      type: REMOVE_STICKS,
      stickIDS1,
      stickIDS2,
      stickIDS3,
    } as const),

  removeSticksID: () =>
    ({
      type: REMOVE_STICKS_ID,
    } as const),

  setPlayer: (player: number) =>
    ({
      type: SET_PLAYER,
      player,
    } as const),

  setRestart: () =>
    ({
      type: SET_RESTART,
    } as const),
}

type ActionsTypes = InferActionsTypes<typeof gameActions>
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

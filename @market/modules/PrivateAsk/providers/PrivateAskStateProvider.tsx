import { useModal } from '@modal'
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
} from 'react'

interface PrivateAskProps {
  children: React.ReactNode
}

type PrivateAskTxDetails = {
  price: string
  buyerAddress: string
  rawBuyerAddress: string
}

export const VIEW_LISTING: string = 'viewListing'
export const APPROVE_MODULE_FOR_CREATE: string = 'approveModuleForSale'
export const APPROVE_MODULE_FOR_FILL: string = 'approveModuleForFill'
export const APPROVE_TRANSFER: string = 'approveTransferHelper'
export const CREATE: string = 'createPrivateAsk'
export const CREATE_SUCCESS: string = 'createPrivateAskSuccess'
export const UPDATE: string = 'updatePrivateAsk'
export const UPDATE_SUCCESS: string = 'updatePrivateAskSuccess'
export const CANCEL: string = 'cancelPrivateAsk'
export const CANCEL_SUCCESS: string = 'cancelPrivateAskSuccess'
export const FILLASK: string = 'fillPrivateAsk'
export const FILLASK_SUCCESS: string = 'fillPrivateAskSuccess'
export const RESET: string = 'resetPrivateAsk'

export const initialState = {
  next: APPROVE_TRANSFER,
  status: APPROVE_MODULE_FOR_CREATE,
}

interface State {
  next?: string
  status: string
}

export type PrivateAskAction =
  | { type: typeof VIEW_LISTING }
  | { type: typeof APPROVE_MODULE_FOR_CREATE }
  | { type: typeof APPROVE_TRANSFER }
  | { type: typeof CREATE }
  | { type: typeof CREATE_SUCCESS }
  | { type: typeof UPDATE }
  | { type: typeof UPDATE_SUCCESS }
  | { type: typeof CANCEL }
  | { type: typeof CANCEL_SUCCESS }
  | { type: typeof APPROVE_MODULE_FOR_FILL }
  | { type: typeof FILLASK }
  | { type: typeof FILLASK_SUCCESS }
  | { type: typeof RESET }

export function reducer(_state: State, action: PrivateAskAction): State {
  switch (action.type) {
    case RESET:
    case APPROVE_MODULE_FOR_CREATE:
      return initialState
    case APPROVE_TRANSFER:
      return { status: APPROVE_TRANSFER, next: CREATE }
    case CREATE:
      return { status: CREATE, next: CREATE_SUCCESS }
    case CREATE_SUCCESS:
      return { status: CREATE_SUCCESS }
    case UPDATE:
      return { status: UPDATE, next: UPDATE_SUCCESS }
    case UPDATE_SUCCESS:
      return { status: UPDATE_SUCCESS }
    case CANCEL:
      return { status: CANCEL, next: CANCEL_SUCCESS }
    case CANCEL_SUCCESS:
      return { status: CANCEL_SUCCESS }
    case APPROVE_MODULE_FOR_FILL:
      return { status: APPROVE_MODULE_FOR_FILL, next: FILLASK }
    case FILLASK:
      return { status: FILLASK, next: FILLASK_SUCCESS }
    case FILLASK_SUCCESS:
      return { status: FILLASK_SUCCESS }
    case VIEW_LISTING:
      return { status: VIEW_LISTING }
    default:
      throw new Error()
  }
}

export interface PrivateAskProviderState {
  state: State
  dispatch: React.Dispatch<PrivateAskAction>
  finalizedPrivateAskDetails?: PrivateAskTxDetails
  setFinalizedPrivateAskDetails: (value: PrivateAskTxDetails) => void
  handleNext: () => void
}

export const PrivateAskStateContext = createContext<PrivateAskProviderState>({
  state: initialState,
  dispatch: (_action: PrivateAskAction) => {},
  finalizedPrivateAskDetails: undefined,
  setFinalizedPrivateAskDetails: (_value: PrivateAskTxDetails) => {},
  handleNext: () => {},
} as PrivateAskProviderState)

export function PrivateAskStateProvider({ children }: PrivateAskProps) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [finalizedPrivateAskDetails, setFinalizedPrivateAskDetails] = useState<
    PrivateAskTxDetails | undefined
  >(undefined)
  const { requestClose } = useModal()

  const next = state.next as string | undefined

  const handleNext = useCallback(() => {
    if (next) {
      if (dispatch) {
        dispatch({ type: next })
      }
    } else {
      // @BJ todo: add modal close functionality here
      requestClose()
      if (dispatch) dispatch({ type: RESET })
    }
  }, [next, requestClose])

  const value = useMemo(
    () => ({
      state,
      handleNext,
      finalizedPrivateAskDetails,
      setFinalizedPrivateAskDetails,
    }),
    [state, handleNext, finalizedPrivateAskDetails]
  )

  return (
    <PrivateAskStateContext.Provider value={{ ...value, dispatch }}>
      {children}
    </PrivateAskStateContext.Provider>
  )
}

export const usePrivateAskStateContext = () => useContext(PrivateAskStateContext)

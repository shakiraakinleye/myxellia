import { configureStore } from '@reduxjs/toolkit'
import budgetModalReducer from './budget-modal-slice'

export const RootState = configureStore({
  reducer: {
    budgetModal: budgetModalReducer,
  },
})

export type RootState = ReturnType<typeof RootState.getState>
export type AppDispatch = typeof RootState.dispatch
import { configureStore } from '@reduxjs/toolkit'
import budgetModalReducer from './budget-modal-slice'
import calendarDrawerReducer from "./calendar-drawer-slice"
import salesFilterReducer from './sales-filter-slice';
import userReducer from './user-slice';

export const RootState = configureStore({
  reducer: {
    budgetModal: budgetModalReducer,
    salesFilter: salesFilterReducer,
    user: userReducer,
    calendarDrawer: calendarDrawerReducer,
  },
})

export type RootState = ReturnType<typeof RootState.getState>
export type AppDispatch = typeof RootState.dispatch
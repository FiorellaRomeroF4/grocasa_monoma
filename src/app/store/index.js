import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import property from './property/property'

const reducer = combineReducers({
  property,
})

export const store = configureStore({
  reducer,
})

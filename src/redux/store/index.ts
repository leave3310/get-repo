import { createStore } from 'redux'
import names from '@redux/reducers/name'

export type rootState = ReturnType<typeof names>

export default createStore(names)
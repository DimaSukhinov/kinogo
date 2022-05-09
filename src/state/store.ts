import {combineReducers, createStore} from 'redux'
import {descriptionReducer} from './description-reducer'


const rootReducer = combineReducers({
    films: descriptionReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store
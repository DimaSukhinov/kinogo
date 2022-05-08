import {combineReducers, createStore} from 'redux';
import {filmsReducer} from './films-reducer';


const rootReducer = combineReducers({
    films: filmsReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store
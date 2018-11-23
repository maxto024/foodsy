import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  restaurantsRequest: ['options'],
  restaurantsSuccess: ['restaurants'],
  restaurantsFailure: null
})

export const RestaurantsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  restaurants: null,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

export const RestaurantsSelect = {
  selectRestaurants: state => state.restaurants.restaurants
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state) =>
  state.merge({ fetching: true, restaurants: null })

// successful avatar lookup
export const success = (state, action) => {
  const { restaurants } = action
  return state.merge({ fetching: false, error: null, restaurants })
}

// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true, restaurants: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESTAURANTS_REQUEST]: request,
  [Types.RESTAURANTS_SUCCESS]: success,
  [Types.RESTAURANTS_FAILURE]: failure
})

import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/RestaurantsRedux'

import FixtureAPI from '../../App/Services/FixtureApi'
const response = FixtureAPI.getRestaurants(); 
const data = response.data.restaurants;
test('request', () => {

  const state = reducer(INITIAL_STATE, Actions.restaurantsRequest({}))

  expect(state.fetching).toBe(true)
  expect(state.restaurants).toBeNull
})

test('success', () => {

  const state = reducer(INITIAL_STATE, Actions.restaurantsSuccess(data))

  expect(state.fetching).toBe(false)
  expect(state.restaurants).toEqual(data)
  expect(state.error).toBeNull()
})

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.restaurantsFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.restaurants).toBeNull()
})

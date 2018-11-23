import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import RestaurantsActions from '../../App/Redux/RestaurantsRedux'
import { path } from 'ramda'
import { getRestaurants } from '../../App/Sagas/RestaurantsSagas'

const stepper = (fn) => (mock) => fn.next(mock).value

test('success path', () => {
  const response = FixtureAPI.getRestaurants({})
  const step = stepper(getRestaurants(FixtureAPI, {}))
  // first step API
  step()
  // Second step successful return
  const stepResponse = step(response)
  // Get the avatar Url from the response
  const restaurants = stepResponse.data
  expect(stepResponse).toEqual(put(RestaurantsActions.restaurantsSuccess(response.data)))
})

test('failure path', () => {
  const response = {ok: false}
  const step = stepper(getRestaurants(FixtureAPI, {}))
  // first step API
  step()
  // Second step failed response
  expect(step(response)).toEqual(put(RestaurantsActions.restaurantsFailure()))
})

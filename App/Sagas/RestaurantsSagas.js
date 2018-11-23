import { call, put } from 'redux-saga/effects'

import RestaurantsActions from '../Redux/RestaurantsRedux'

export function * getRestaurants (api, action) {
  const { options } = action
  // make the call to the api
  const response = yield call(api.getRestaurants, options)

  if (response.ok) {
    // do data conversion here if needed
    console.tron.log('json parse', response.data)
    yield put(RestaurantsActions.restaurantsSuccess(response.data))
  } else {
    yield put(RestaurantsActions.restaurantsFailure())
  }
}

import API from '../../App/Services/Api'
import FixtureAPI from '../../App/Services/FixtureApi'
import R from 'ramda'

test('All fixtures map to actual API', () => {
  const fixtureKeys = R.keys(FixtureAPI).sort()
  const apiKeys = R.keys(API.create())

  const intersection = R.intersection(fixtureKeys, apiKeys).sort()

  // There is no difference between the intersection and all fixtures
  expect(R.equals(fixtureKeys, intersection)).toBe(true)
})


test('FixtureAPI getRestaurants returns the right file for Restaurants as default', () => {
  const expectedFile = require('../../App/Fixtures/restaurants')

  expect(FixtureAPI.getRestaurants({'whatever':'whatever'})).toEqual({
    ok: true,
    data: expectedFile
  })
})

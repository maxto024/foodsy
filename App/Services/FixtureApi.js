export default {
  // Functions return fixtures
  getRestaurants: (options) => {
    const restaurants = require('../Fixtures/restaurants.json')
    return {
      ok: true,
      data: restaurants
    }
  }
}

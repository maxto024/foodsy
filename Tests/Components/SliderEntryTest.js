import 'react-native'
import React from 'react'
import SliderEntry from '../../App/Components/SliderEntry'
import renderer from 'react-test-renderer'
import FixtureAPI from '../../App/Services/FixtureApi'
const response = FixtureAPI.getRestaurants(); 
const data = response.data.restaurants;

test('Slider Entery component renders correctly if show is true', () => {
  const tree = renderer.create(<SliderEntry data={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('sliderEntery component does not render if show is false', () => {
  const tree = renderer.create(<SliderEntry data={}  />).toJSON()
  expect(tree).toMatchSnapshot()
})


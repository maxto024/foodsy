import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes'
const IS_IOS = Platform.OS === 'ios'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

function wp (percentage) {
  const value = percentage * viewportWidth / 100
  return Math.round(value)
}
export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD'
}

const slideHeight = viewportHeight * 0.36
const slideWidth = wp(75)
const itemHorizontalMargin = wp(2)

export const sliderWidth = viewportWidth
export const itemWidth = slideWidth + itemHorizontalMargin * 2

const entryBorderRadius = 8

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  safeArea: {
    flex: 1,
    backgroundColor: colors.black
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  header: {
    backgroundColor: Colors.primary,
    borderBottomWidth: 0,
    padding: 20

  },
  sliderHeader: {
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  sliderHeaderItem: {
    flexDirection: 'row'
  },
  sliderHeaderItemSub: {
    marginHorizontal: 5,
    flexDirection: 'row'
  },
  slideHeaderItemText: {
    paddingLeft: 2,
    paddingTop: 7,
    color: Colors.secondary,
    fontSize: 17
  },
  slideHeaderItemTextSub: {
    color: Colors.secondary,
    fontSize: 12
  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  scrollview: {
    flex: 1
  },
  sliderContainer: {
    flex: 1,

    backgroundColor: Colors.primary
  },
  title: {
    color: Colors.black,
    fontSize: 25,
    fontWeight: 'normal'
  },
  slider: {
    marginTop: 0,
    overflow: 'visible' // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 1 // for custom animation
  }

})

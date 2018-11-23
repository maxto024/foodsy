import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Colors } from '../../Themes'
export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD'
}

const IS_IOS = Platform.OS === 'ios'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

function wp (percentage) {
  const value = percentage * viewportWidth / 100
  return Math.round(value)
}

const slideHeight = viewportHeight * 0.75
const slideWidth = wp(75)
const itemHorizontalMargin = wp(2)

export const sliderWidth = viewportWidth
export const itemWidth = slideWidth + itemHorizontalMargin * 2

const entryBorderRadius = 8

export default StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
  },
  sliderHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.secondary,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,

    padding: 10
  },
  sliderHeaderText: {
    color: Colors.text,
    fontSize: 17
  },
  sliderHeaderIcon: {
    color: Colors.text,
    fontSize: 25
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: Colors.background,
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },

  contentContainer: {
    flexDirection: 'column'
  },

  imageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: Colors.background,
    padding: 10
  },
  imageHeaderItems: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageHeaderItemIcons: {
    color: Colors.secondary,
    fontSize: 25
  },
  imageHeaderItemIcons: {
    color: Colors.secondary,
    fontSize: 22
  },
  imageHeaderItemText: {
    paddingTop: 5,
    paddingLeft: 2,
    fontSize: 16,
    color: Colors.black
  },
  imageHeaderItemSubText: {
    fontSize: 11
  },
  footerContainerText: {
    color: Colors.secondary,
    fontSize: 16
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: Colors.background,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  location: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: Colors.transparent
  },

  locationItem: {
    paddingTop: 10,

    flexDirection: 'row',
    backgroundColor: Colors.transparent
  },
  locationText: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: 'normal',
    paddingLeft: 10
  },
  locationIcon: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: 'normal'
  },

  imageFooterContainer: {
    backgroundColor: Colors.transparent,
    padding: 10
  },
  imageFooterItem: {
    flexDirection: 'row'
  },
  imageFooterText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'normal'
  },
  imageFooterIcon: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: 'normal'
  }
})

import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'
const IS_IOS = Platform.OS === 'ios'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

function wp(percentage) {
	const value = percentage * viewportWidth / 100
	return Math.round(value)
}
export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD'
};

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
		backgroundColor: colors.background1
	},
	gradient: {
		...StyleSheet.absoluteFillObject
	},
	scrollview: {
		flex: 1
	},
	exampleContainer: {
		paddingVertical: 30
	},
	exampleContainerDark: {
		backgroundColor: colors.black
	},
	exampleContainerLight: {
		backgroundColor: 'white'
	},
	title: {
		paddingHorizontal: 30,
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.9)',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	titleDark: {
		color: colors.black
	},
	subtitle: {
		marginTop: 5,
		paddingHorizontal: 30,
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: 13,
		fontStyle: 'italic',
		textAlign: 'center'
	},
	slider: {
		marginTop: 15,
		overflow: 'visible' // for custom animations
	},
	sliderContentContainer: {
		paddingVertical: 10 // for custom animation
	},
	paginationContainer: {
		paddingVertical: 8
	},
	paginationDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginHorizontal: 8
	},
	sliderWidth: {
		width: 200,
		height: 200
	},
	slideInnerContainer: {
		width: itemWidth,
		height: slideHeight,
		paddingHorizontal: itemHorizontalMargin,
		paddingBottom: 18 // needed for shadow
	},
	shadow: {
		position: 'absolute',
		top: 0,
		left: itemHorizontalMargin,
		right: itemHorizontalMargin,
		bottom: 18,
		shadowColor: Colors.black,
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 10,
		borderRadius: entryBorderRadius
	},
	imageContainer: {
		flex: 1,
		marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
		backgroundColor: 'white',
		borderTopLeftRadius: entryBorderRadius,
		borderTopRightRadius: entryBorderRadius
	},
	imageContainerEven: {
		backgroundColor: Colors.black
	},
	image: {
		...StyleSheet.absoluteFillObject,
		resizeMode: 'cover',
		borderRadius: IS_IOS ? entryBorderRadius : 0,
		borderTopLeftRadius: entryBorderRadius,
		borderTopRightRadius: entryBorderRadius
	},
	// image's border radius is buggy on iOS; let's hack it!
	radiusMask: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: entryBorderRadius,
		backgroundColor: 'white'
	},
	radiusMaskEven: {
		backgroundColor: Colors.black
	},
	textContainer: {
		justifyContent: 'center',
		paddingTop: 20 - entryBorderRadius,
		paddingBottom: 20,
		paddingHorizontal: 16,
		backgroundColor: 'white',
		borderBottomLeftRadius: entryBorderRadius,
		borderBottomRightRadius: entryBorderRadius
	},
	textContainerEven: {
		backgroundColor: Colors.black
	},
	title: {
		color: Colors.black,
		fontSize: 13,
		fontWeight: 'bold',
		letterSpacing: 0.5
	},
	titleEven: {
		color: 'white'
	},
	subtitle: {
		marginTop: 6,
		color: Colors.gray,
		fontSize: 12,
		fontStyle: 'italic'
	},
	subtitleEven: {
		color: 'rgba(255, 255, 255, 0.7)'
	}
})

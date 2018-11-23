import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import Carousel from 'react-native-snap-carousel'
import styles, { itemWidth, sliderWidth } from './Styles/RestaurantsScreenStyles'
import { Colors } from '../Themes'
import SliderEntry from '../Components/SliderEntry'
import RestaurantsAction from '../Redux/RestaurantsRedux'
import { Container, Header, Left, Right, Content, Icon, Title, Row } from 'native-base'
class RestaurantsScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      slider1ActiveSlide: 2,
      restaurants: []
    }
  }

  _RenderRestaurants ({ item, index }, parallaxProps) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} parallax parallaxProps={parallaxProps} />
  }
  _RenderSliderHeader () {
    return  	 this.state.user ? (
      <View style={styles.sliderHeader}>
        <View style={styles.sliderHeaderItemSub}>
          <Icon name='calendar' type='Foundation' />
          <Text style={styles.slideHeaderItemText}>{this.state.user.when}</Text>
        </View>
        <View style={styles.sliderHeaderItemSub}>
          <View style={styles.sliderHeaderItemSub}>
            <Icon name='ios-people' type='Ionicons' />

            <Text style={styles.slideHeaderItemText}>{this.state.user.people}</Text>
          </View>
          <View style={styles.sliderHeaderItemSub}>
            <Icon name='ios-clock' type='Ionicons' />
            <Text style={styles.slideHeaderItemText}>
              {this.state.user.time[0]}
              <Text style={styles.slideHeaderItemTextSub}>{this.state.user.time[1]}</Text>
            </Text>
          </View>
        </View>
      </View>
		) : (false)
  }
  componentWillReceiveProps (newProps) {
    console.tron.log('restaurants', newProps)
    if (this.state.restaurants) {
      this.setState({ restaurants: newProps.restaurants.restaurants, user: newProps.restaurants.user })
    }
  }
  componentDidUpdate () {
		 console.tron.log('index', this.state.slider1ActiveSlide)
  }

  componentWillMount () {
    this.props.getRestaurants({})
  }
  render () {
    return this.state.restaurants ? (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Text style={styles.title}>Foodsy</Text>
          </Left>
          <Right>
            <Icon name='ios-search' />
          </Right>
        </Header>
        <View style={styles.sliderContainer}>
          {this._RenderSliderHeader()}
          <Carousel
            ref={(c) => (this._slider1Ref = c)}
            data={this.state.restaurants}
            renderItem={this._RenderRestaurants}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            firstItem={2}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
					/>
        </View>
      </Container>
		) : (false)
  }
}

const mapStateToProps = (state) => ({
	// for developer convenience
  restaurants: state.restaurants.restaurants
})

const mapDispatchToProps = (dispatch) => ({
  getRestaurants: (options) => dispatch(RestaurantsAction.restaurantsRequest(options))
	// for developer convenience
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsScreen)

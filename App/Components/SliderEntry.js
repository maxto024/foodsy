import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground,Linking ,Alert} from 'react-native'
import { Icon } from 'native-base'
import PropTypes from 'prop-types'
import styles from './Styles/SliderEntryStyle'
import { Images } from '../Themes'

export default class SliderEntry extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool
  }

  //function for linking Cll
  callNumber = (url) =>{
    Linking.canOpenURL(url).then(supported => {
    if (!supported) {
     console.tron.log('Can\'t handle url: ' + url);
     Alert.alert(
      'Waring Cant call ',
      'You are Using Simulator to test this feature please use real device',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
    } else {
     return Linking.openURL(url);
    }
  }).catch(err => console.tron.log('An error occurred', err));
 }

  _renderSliderSummeryHeader () {
    const { data: { priceMax, priceMin, walkTime, rating, love } } = this.props
    return (
      <View style={styles.imageHeader}>
        <View style={styles.imageHeaderItems}>
          <Icon name='walk' type='MaterialCommunityIcons' style={styles.imageHeaderItemIcons} />
          <Text style={styles.imageHeaderItemText}>
            {walkTime[0]}
            <Text style={styles.imageHeaderItemSubText}>{walkTime[1]}</Text>
          </Text>
        </View>
        <View style={styles.imageHeaderItems}>
          <Icon name='dollar' type='FontAwesome' style={styles.imageHeaderItemIcons} />
          <Text style={styles.imageHeaderItemText}>
            {priceMin}-{priceMax}
          </Text>
        </View>
        <View style={styles.imageHeaderItems}>
          <Icon name='star' type='FontAwesome' style={styles.imageHeaderItemIcons} />
          <Text style={styles.imageHeaderItemText}>
            {rating[0]}/<Text style={styles.imageHeaderItemSubText}>{rating[0]}</Text>
          </Text>
        </View>
        <View style={styles.imageHeaderItems}>
          <Icon name='heart' type='FontAwesome' style={styles.imageHeaderItemIcons} />
          <Text style={styles.imageHeaderItemText}>{love}</Text>
        </View>
      </View>
    )
  }

  _RenderImageWithLocationAndFeatured () {
    const { data: { featured, status, location, closeAt, image } } = this.props
    return (
      <ImageBackground
        source={Images[image]}
        style={styles.imageContainer}
        imageStyle={styles.imageContainerStyle}
			>
        <View styles={styles.location}>
          <View style={styles.locationItem}>
            <Icon name='location-pin' type='Entypo' style={styles.locationIcon} />
            <Text style={styles.locationText}>{location}</Text>
          </View>

          <View style={styles.locationItem}>
            <Text style={styles.locationText}>{closeAt}</Text>
          </View>
        </View>
        <View style={styles.imageFooterContainer}>
          <View style={styles.imageFooterItem}>
            <Icon name='dot-single' type='Entypo' style={styles.imageFooterIcon} />
            <Text style={styles.imageFooterText}>{status}</Text>
          </View>

          <View style={styles.imageFooterItem}>
            <Icon name='star' type='Foundation' style={styles.imageFooterIcon} />
            <Text style={styles.imageFooterText}>{featured}</Text>
          </View>
        </View>
      </ImageBackground>
    )
  }

  _renderSilderFooter () {
    const { data: { phone, distance }, even } = this.props
    return (
      <View style={styles.footerContainer}>
        <TouchableOpacity  onPress={()=> this.callNumber(`tel:${phone}`)}>
          <Text style={styles.footerContainerText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerContainerText}>{distance}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerContainerText}>Reverse</Text>
        </TouchableOpacity>
      </View>
    )
  }
  _renderSilderTopHeader () {
    const { data: { name }, even } = this.props
    return (
      <View style={styles.sliderHeader}>
        <Text style={styles.sliderHeaderText}>{name}</Text>
        <Icon name='pin' type='SimpleLineIcons' style={styles.sliderHeaderIcon} />
      </View>
    )
  }
  render () {
    return (
      <View activeOpacity={1} style={styles.slideInnerContainer}>
        <View style={styles.shadow} />
        {this._renderSilderTopHeader()}
        {this._renderSliderSummeryHeader()}
        {this._RenderImageWithLocationAndFeatured()}
        {this._renderSilderFooter()}
      </View>
    )
  }
}

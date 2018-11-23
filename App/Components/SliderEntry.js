import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Icon } from 'native-base'

import styles from './Styles/SliderEntryStyle'
import { Images } from '../Themes'
export default class SliderEntry extends Component {
  render () {
    const {
			data: { name, priceMax, priceMin, featured, status, location, closeAt, phone, distance, walkTime, rating, love, image },
			even
		} = this.props

    return (
      <View activeOpacity={1} style={styles.slideInnerContainer}>
        <View style={styles.shadow} />
        <View style={styles.sliderHeader}>
          <Text style={styles.sliderHeaderText}>{name}</Text>
          <Icon name='pin' type='SimpleLineIcons' style={styles.sliderHeaderIcon} />
        </View>
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
            <Text style={styles.imageHeaderItemText}>{priceMin}-{priceMax}</Text>
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
              <Text style={styles.imageFooterText} >{status}</Text>
            </View>

            <View style={styles.imageFooterItem}>
              <Icon name='star' type='Foundation' style={styles.imageFooterIcon} />
              <Text style={styles.imageFooterText} >{featured}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Text style={styles.footerContainerText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerContainerText}>6 Miles Away</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerContainerText}>Reverse</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

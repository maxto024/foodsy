
import React,{Component} from 'react'
import {Text,View,} from 'react-native'
import Carousel, { Pagination }  from 'react-native-snap-carousel';
import styles,{itemWidth,sliderWidth} from './Styles/LaunchScreenStyles';
import {ENTRIES1} from '../Static/Enteries'
import { Colors } from '../Themes';
import SliderEntry from '../Components/SliderEntry'
export default class LaunchScreen extends Component {
  state={
    entries:ENTRIES1,
    slider1ActiveSlide: 1
  }
 
    _renderItemWithParallax ({item, index}, parallaxProps) {
      return (
          <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}
          />
      );
  }
    render () {
      const { slider1ActiveSlide } = this.state;

      return (
          <View style={styles.exampleContainer}>
              <Text style={styles.title}>{`Example 1`}</Text>
              <Text style={styles.subtitle}>example</Text>
              <Carousel
                ref={c => this._slider1Ref = c}
                data={ENTRIES1}
                renderItem={this._renderItemWithParallax}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                hasParallaxImages={true}
                firstItem={1}

                // inactiveSlideShift={20}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
              />
        
          </View>
      );
  }

}

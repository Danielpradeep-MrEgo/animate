import {Animated, Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import Card, {CARD_HEIGHT} from '../components/Card';
import Cards from '../components/Cards';
import {products} from '../components/Model';
import Products from '../components/Products';

const HomeScreens = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width} = Dimensions.get('window');

  const backgroundColor = scrollX.interpolate({
    inputRange: [0, width * 1, width * 2, width * 3, width * 4],
    outputRange: ['#FBC6AE', '#63D8B0', '#FDD446', '#FF9A16', '#F3F1ED'],
  });

  const snapToOffsets = [0, CARD_HEIGHT];

  return (
    <Animated.View
      style={{
        backgroundColor: backgroundColor,
      }}>
      <ScrollView
        // bounces={true}
        showsVerticalScrollIndicator={false}
        // snapToOffsets={snapToOffsets}
        snapToEnd={false}
        decelerationRate="fast">
        <View style={styles.slider}>
          <Animated.ScrollView
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={16}
            decelerationRate="fast"
            snapToInterval={width}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Animated.ScrollView>
          <Products x={scrollX} />
        </View>
        <Cards />
      </ScrollView>
    </Animated.View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  slider: {height: CARD_HEIGHT},
});

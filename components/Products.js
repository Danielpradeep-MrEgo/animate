import React from 'react';
import {View, StyleSheet, Image, Dimensions, Animated} from 'react-native';
import {products} from './Model';

const {width} = Dimensions.get('window');
const SIZE = 200;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Products = ({x}) => {
  return (
    <View style={styles.container} pointerEvents="none">
      {products.map((product, index) => {
        const translateX = x.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [width / 2, 0, -width / 2],
        });
        const scale = x.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [0.61, 1, 0.61],
        });

        return (
          <Animated.View
            key={index}
            style={[styles.container, {transform: [{translateX}, {scale}]}]}>
            <Image
              source={product.picture}
              style={{
                width: SIZE,
                height: SIZE * product.aspectRatio,
                marginTop: 50,
              }}
            />
          </Animated.View>
        );
      })}
    </View>
  );
};

export default Products;

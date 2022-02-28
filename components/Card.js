import React from 'react';
import {Dimensions, View, StyleSheet, Text} from 'react-native';
import Button from './Button';
import CardHeader from './CardHeader';
// import CardHeader from './components/CardHeader';

const {width} = Dimensions.get('window');
export const CARD_HEIGHT = (width * 1564) / 974;
const styles = StyleSheet.create({
  container: {
    width,
    height: CARD_HEIGHT,
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 28,
    textAlign: 'center',
    color: '#432406',
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 16,
    textAlign: 'center',
    color: '#432406',
  },
});

const Card = ({product: {color1, title, subtitle}}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 16,
          margin: 32,
          flex: 1,
          backgroundColor: color1,
          padding: 16,
          justifyContent: 'space-between',
        }}>
        <View>
          <CardHeader />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Button label="I'll try it" />
      </View>
    </View>
  );
};

export default Card;

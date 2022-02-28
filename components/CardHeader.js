import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import edit from '../assets/edit.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'GothamRounded-Medium',
    alignSelf: 'center',
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
});

const CardHeader = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <Text style={styles.title}>RECOMMEND</Text>
      <View style={styles.action}>
        <Image source={edit} style={{width: 20, height: 20}} />
      </View>
    </View>
  );
};

export default CardHeader;

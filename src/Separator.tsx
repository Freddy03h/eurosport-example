import React from 'react';
import {StyleSheet, View, PixelRatio} from 'react-native';

function Separator({highlighted}) {
  return (
    <View style={[styles.separator, highlighted && styles.separatorHide]} />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: PixelRatio.roundToNearestPixel(0.5),
    backgroundColor: '#C8C7CC',
  },
  separatorHide: {
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
});

export default Separator;

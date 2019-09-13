import React, {useCallback} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

const PlayerRowView = ({player}) => {
  const navigation = useNavigation();

  const openPlayer = useCallback(() => {
    navigation.navigate('playerShow', {
      player,
    });
  }, [player]);

  return (
    <TouchableHighlight onPress={openPlayer} underlayColor="#000000">
      <View style={styles.container}>
        <Text>{player.shortname}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
});

export default PlayerRowView;

import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

function displayPlayerName(player) {
  return `${player.firstname} ${player.lastname}`;
}

const PlayerView = ({navigation}) => {
  const player = navigation.getParam('player');
  return (
    <ScrollView style={styles.container}>
      <Text>{displayPlayerName(player)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

PlayerView.navigationOptions = ({navigation}) => ({
  headerTitle: displayPlayerName(navigation.getParam('player')),
});

export default PlayerView;

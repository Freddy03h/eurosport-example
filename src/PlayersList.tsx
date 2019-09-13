import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';

import PlayerRowView from './PlayerRowView';
import Separator from './Separator';

function _keyExtractor(item) {
  return item.shortname; // assuming it's the id…
}

function renderPlayerRow({item: player}) {
  return <PlayerRowView player={player} />;
}

const PlayersList = () => {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetch(
      'https://eurosportdigital.github.io/eurosport-react-native-developer-recruitment/docs/headtohead.json',
    )
      .then(response => response.json())
      .then(json => setPlayers(json.players));
  }, []);

  if (!players) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={players}
      style={styles.container}
      keyExtractor={_keyExtractor}
      renderItem={renderPlayerRow}
      ItemSeparatorComponent={Separator}
    />
  );
};

const styles = StyleSheet.create({
  loadingView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
  },
});

PlayersList.navigationOptions = () => ({
  headerTitle: 'Liste des joueurs',
});

export default PlayersList;

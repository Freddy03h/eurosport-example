import React from 'react';
import {StyleSheet, ScrollView, Text, View, Image} from 'react-native';

function displayPlayerName(player) {
  return `${player.firstname} ${player.lastname}`;
}

function displayHeight(height) {
  return height / 100;
}

function displayWeight(weight) {
  return weight / 1000;
}

function DataBloc({label, value}) {
  return (
    <View style={styles.dataBloc}>
      <Text style={styles.dataBlocLabel}>{label}</Text>
      <Text style={styles.dataBlocValue}>{value}</Text>
    </View>
  );
}

const PlayerView = ({navigation}) => {
  const player = navigation.getParam('player');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: player.picture}}
          resizeMode="cover"
          style={styles.image}
        />
        <View>
          <Text style={styles.textFirstname}>{player.firstname}</Text>
          <Text style={styles.textLastname}>{player.lastname}</Text>
          <Image
            source={{uri: player.country.picture}}
            resizeMode="contain"
            style={styles.flag}
          />
        </View>
      </View>
      <View style={styles.dataBlocContainer}>
        <DataBloc
          label="Taille (M)"
          value={displayHeight(player.data.height)}
        />
        <DataBloc
          label="Poids (KG)"
          value={displayWeight(player.data.weight)}
        />
        <DataBloc label="Age" value={player.data.age} />
        <DataBloc label="Classement" value={player.data.rank} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#151725',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
  },
  textFirstname: {
    fontSize: 30,
  },
  textLastname: {
    marginTop: 6,
    marginBottom: 12,
    fontSize: 30,
    fontWeight: 'bold',
  },
  flag: {
    width: 30,
    aspectRatio: 3 / 2,
  },
  image: {
    height: 150,
    width: 100,
    borderRadius: 5,
    marginRight: 14,
  },

  dataBlocContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  dataBloc: {
    alignItems: 'center',
  },
  dataBlocLabel: {
    color: 'white',
    fontSize: 14,
  },
  dataBlocValue: {
    marginTop: 10,
    color: 'white',
    fontSize: 32,
  },
});

PlayerView.navigationOptions = ({navigation}) => ({
  headerTitle: displayPlayerName(navigation.getParam('player')),
});

export default PlayerView;

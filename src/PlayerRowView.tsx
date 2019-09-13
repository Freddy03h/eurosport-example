import React, {useCallback} from 'react';
import {TouchableHighlight, View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import Icon from 'react-native-vector-icons/Ionicons';

const PlayerRowView = ({player}) => {
  const navigation = useNavigation();

  const openPlayer = useCallback(() => {
    navigation.navigate('playerShow', {
      player,
    });
  }, [player]);

  return (
    <TouchableHighlight onPress={openPlayer} underlayColor="#000000">
      <View style={styles.row}>
        <Image
          source={{uri: player.picture}}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.rowBody}>
          <Text>{player.firstname}</Text>
          <Text style={styles.textLastname}>{player.lastname}</Text>
        </View>

        <Icon
          style={styles.rowArrow}
          name="ios-arrow-forward"
          size={20}
          color="#C7C7CC"
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingRight: 15,
    backgroundColor: '#FFFFFF',
  },
  image: {
    height: 60,
    aspectRatio: 2 / 3,
  },
  textLastname: {
    marginTop: 2,
    fontWeight: 'bold',
  },
  rowBody: {
    flex: 1,
    paddingLeft: 15,
  },
  rowArrow: {
    marginLeft: 13,
    height: 20,
  },
});

export default PlayerRowView;

// src/screens/CharacterSelectScreen.js

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CharacterSelectScreen = ({navigation}) => {
  const characters = ['Character 1', 'Character 2', 'Character 3']; // Replace with your characters

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Character</Text>
      {characters.map(character => (
        <Button
          key={character}
          title={character}
          onPress={() => navigation.navigate('ChatScreen', {character})}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CharacterSelectScreen;

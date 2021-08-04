import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

Audio.setAudioModeAsync({ 
  playsInSilentModeIOS: true,
  allowsRecordingIOS: false,                                                                                                                                                                                   
  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,                                                                         
  shouldDuckAndroid: false,                                                                                                           
  interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  playThroughEarpieceAndroid: true
});

export default function List() {
  const [sound, setSound] = React.useState();

  async function playSound1() {
    console.log('Loading Sound');

    const { sound } = await Audio.Sound.createAsync(
       require('../../assets/Plain/C.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); 
  }

  async function stopSound1() {
    console.log('Stopped Sound');
    await sound.stopAsync(); 
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);


  
  async function playSound2() {
    console.log('Loading Sound');

    const { sound } = await Audio.Sound.createAsync(
       require('../../assets/Victory/V.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); 
  }

  async function stopSound2() {
    console.log('Stopped Sound');
    await sound.stopAsync(); 
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); 
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress = {() => {playSound1()} } />
      <Button title="Stop Sound" onPress = {() => {stopSound1()} } />
      <Button title="Play Sound" onPress = {() => {playSound2()} } />
      <Button title="Stop Sound" onPress = {() => {stopSound2()} } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
 
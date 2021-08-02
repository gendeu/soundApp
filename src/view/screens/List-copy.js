import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    await Audio.setAudioModeAsync({ 
        playsInSilentModeIOS: true,
        allowsRecordingIOS: false,                                                                                                                                                                                   
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,                                                                         
        shouldDuckAndroid: false,                                                                                                           
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: true
    })
    const { sound } = await Audio.Sound.createAsync(
       require('../../assets/Plain/C.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); 
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Stop Sound" onPress={playSound} />
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
 
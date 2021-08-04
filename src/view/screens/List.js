import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function List() {
  const video1 = React.useRef(null);
  const [status1, setStatus1] = React.useState({});
  const video2 = React.useRef(null);
  const [status2, setStatus2] = React.useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video1}
        style={styles.video}
        source={require('../../assets/Plain/C.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status1 => setStatus1(() => status1)}
      />
      <View style={styles.buttons}>
        <Button
          title={status1.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status1.isPlaying ? video1.current.pauseAsync() : video1.current.playAsync()
          }
        />
      </View>


      <Video
        ref={video2}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status2 => setStatus2(() => status2)}
      />
      <View style={styles.buttons}>
        <Button
          title={status2.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status2.isPlaying ? video2.current.pauseAsync() : video2.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  video: {

  },
  buttons: {

  }
 }); 
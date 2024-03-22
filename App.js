import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Ably from 'ably';

export default function App() {
  useEffect(() => {
    console.log('Hello World, from React Native!');

    const realtime = new Ably.Realtime({
      key: process.env.EXPO_PUBLIC_ABLY_API_KEY,
    });

    const channel = realtime.channels.get('someChannel');

    channel
      .attach()
      .then(() => {
        console.log('Attached to channel');

        channel.subscribe((message) => {
          console.log('Got message from Ably: ', message);
        });

        return channel.publish('someName', { foo: 'bar' });
      })
      .then(() => console.log('Published to Ably'))
      .catch((error) => console.log('Caught error: ', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useState, useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';

//ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
//ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
//ScreenOrientation.unlockAsync();

const App = () => {

  const [isPortrait, setIsPortrait] = useState(true)  

  const onHandlePortrait = () => {
    setIsPortrait(!isPortrait)
    if (isPortrait) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }

  return (
    <SafeAreaView style={[styles.container, !isPortrait ? styles.landscape : styles.portrait]}>
      <Text>Hola mundo</Text>
      <Text>Hola mundo</Text>
      <Text>Hola mundo</Text>
      <TouchableOpacity
        style={{ padding: 10, borderWidth: 1, marginTop: 15 }}
        onPress={onHandlePortrait}
      >
        <Text>Cambiar orientacion</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portrait: {
    flexDirection: 'column',
  },
  landscape: {
    flexDirection: 'row',
  },
})
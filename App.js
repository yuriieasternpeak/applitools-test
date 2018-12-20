/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import ToastExample from './NativeModules'

const crashNative = () => {
    ToastExample.show()
}

const crashJS = () => {
  const array = [undefined]
  const i = array[0].bla
}

export default class App extends Component {
  render() {
    return (
      <View testID="MainScreen" accessibilityLabel="MainScreen" accessible={true} style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button title="Crash me Native!" onPress={crashNative} />
        <Button title="Crash me JS!" onPress={crashJS} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as Font from 'expo-font';

export default function App() {

  // let font = Font.loadAsync({
  //   'pacifico': require('./assets/fonts/Pacifico.ttf'),
  // });
  // fontFamily:"pacifico"

  return (
    <View style={styles.main}>
      <View style={styles.topBar}>
        <Text style={{fontSize:50, color:'#FFA500',}}>
          Tchin
        </Text>
      </View>
      <View style={styles.partyList}>
        <ScrollView style={styles.partyList}>
          <View style={styles.party}>
          </View>
          <View style={styles.party}>
          </View>
          <View style={styles.party}>
          </View>
          <View style={styles.party}>
          </View>
          <View style={styles.party}>
          </View>
          <View style={styles.party}>
          </View>
          <View style={styles.party}>
          </View>
          <View style={styles.party}>
          </View>
          <View style={styles.party}>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFA500',
  },
  topBar: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  partyList: {
    flex: 8,
    backgroundColor: '#FFA500',
  },
  party: {
    backgroundColor: '#FFFFFF',
    padding: 60,
    margin: 20,
    borderRadius: 15,
  },
});

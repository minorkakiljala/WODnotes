import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, TouchableO } from 'react-native';
import Timer from './Components/Timer';
import Notes from './Components/Notes';
import Calculator from './Components/Calculator';
import { ScrollView } from 'react-native-gesture-handler';


export default function App() {

  const [view, setView] = useState(false);


  return (
      <View>
        <ScrollView>
        
        {
          view ? (
          <View>
            <Timer />
          </View>
        ) : (
            <View>
              <Notes />
              <Calculator />
            </View>
          )
        }
        <Button style={styles.btn} onPress={() => setView(!view)} title= {'Press me'}>Timer</Button>

</ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
      btn: {
        color: '#2C1A12'
      }
  })


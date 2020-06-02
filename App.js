import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Button, TouchableO } from 'react-native';
import Timer from './Components/Timer';
import Notes from './Components/Notes';
import Calculator from './Components/Calculator';
import { ScrollView } from 'react-native-gesture-handler';


export default function App() {

  /** The whole view of the app rendered  */
  const [view, setView] = useState(false);

  /** The stages of the calculator -component */
  const [state, setState] = useState(" ")
  const [operator, setOperator] = useState(null)
  const [prevVal, setPrevVal] = useState(null)

  /** Timer -component */
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  /** Notes -component */
  const [notes, setNotes] = useState([
  ]);


  return (
    <View>
      <ScrollView>

        {
          view ? (
            <View>
              <Timer remainingSecs={remainingSecs} setRemainingSecs={setRemainingSecs} isActive={isActive} setIsActive={setIsActive} />
            </View>
          ) : (
              <View>
                <Notes notes={notes} setNotes={setNotes}/>
                <Calculator state={state} setState={setState} operator={operator} setOperator={setOperator} prevVal={prevVal} setPrevVal={setPrevVal} />
              </View>
            )
        }
        <Button style={styles.btn} onPress={() => setView(!view)} title={'Press me'}>Timer</Button>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    color: '#2C1A12'
  }
})


import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddNote({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };


  /** Returns the input on screen written to the placeholder
   * ADD WOD -button functionality in index.js
   */
  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Write the note here'
        onChangeText={changeHandler} 
        value={text} 
        multiline
      />
      <Button color='coral' onPress={() => submitHandler(text, setText(""))} title='ADD WOD' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
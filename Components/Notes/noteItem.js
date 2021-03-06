import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

/** Function for the note item on screen. Takes the pressHandler from index.js. Gives the style for the item
 * and places the text inside the item
 */
export default function NoteItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#DF9370',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 1,
    borderRadius: 10,
  }
});
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, ScrollView, Alert } from 'react-native';
import Header from './header';
import NoteItem from './noteItem';
import AddNote from './addNote';

export default function Appsto() {
  const [notes, setNotes] = useState([
  ]);

  const pressHandler = (key) => {
    setNotes(prevNotes => {
      return prevNotes.filter(notes => notes.key != key);
    });
  };

  const submitHandler = (text, clear) => {
        if(notes.filter(el => el.text === text).length === 0){
        () => clear()
        setNotes((prevNotes) => {
          return [
            { text, key: Math.random().toString() },
            ...prevNotes
          ];
        })
      }
        else {
          Alert.alert('FOR HEAVENS SAKE', 'The item already exists on the list', [
            {text: 'Try again', onPress: () => console.log('alert closed') }
          ]);
        }

      }



  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.list}>
          <FlatList data={notes}
            renderItem={({ item }) => (
              <NoteItem item={item} pressHandler={pressHandler} />
            )}
          />
          <View style={styles.content}>
            <AddNote submitHandler={submitHandler} />
          </View>
        </View>


      </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
})

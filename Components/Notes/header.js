import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';


export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>NOTEBOOK</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    header: {
        height: 90,
        width: 700,
        alignContent:"center",
        paddingTop: 40,
        backgroundColor: '#DF8D43'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      }
})

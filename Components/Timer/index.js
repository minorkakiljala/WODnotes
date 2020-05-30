import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Timer () {

    const screen1 = Dimensions.get('window');

    const formatNumber = number =>`0${number}`.slice(-2);

    const getRemaining = (time) =>{
        const mins = Math.floor(time/ 60);
        const secs = time - mins *60;
        return{mins: formatNumber(mins), secs: formatNumber(secs)};
    }

    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const {mins, secs} = getRemaining(remainingSecs);

    const toggle = () =>{
        setIsActive(!isActive)
    }

    useEffect(() => {
        let interval = null;
        if (isActive){
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs + 1);
            }, 1000);
        }
        else if (!isActive && remainingSecs !==0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, remainingSecs]);

    return (
        <View style = {styles.container}>
            <StatusBar barStyle= 'light-content' />
            <Text style = {styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity onPress={toggle} style = {styles.button} >
                <Text style={styles.text}>{isActive ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>   
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1D0727',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderWidth: 10,
        borderColor: '#B9AAFF',
        width: Dimensions.get('window').width /2,
        height: Dimensions.get('window').width /2,
        borderRadius: Dimensions.get('window').width /2,
        alignItems: 'center',
        justifyContent: 'center'
        },
    text: {
        fontSize: 43,
        color: '#B9AAFF'
    },
    timerText:{
        color: '#fff',
        fontSize: 90,
        marginBottom: 20
    }


})
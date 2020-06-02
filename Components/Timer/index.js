import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * The function for the timer of the app
 */
export default function Timer ({remainingSecs, setRemainingSecs, isActive, setIsActive}) {

    const screen1 = Dimensions.get('window');

    const formatNumber = number =>`0${number}`.slice(-2);

    const getRemaining = (time) =>{
        const mins = Math.floor(time/ 60);
        const secs = time - mins *60;
        return{mins: formatNumber(mins), secs: formatNumber(secs)};
    }

    
    const {mins, secs} = getRemaining(remainingSecs);

    /** Starts the startbutton*/
    const toggle = () =>{
        setIsActive(!isActive)
    }

    /**This EffectHook uses setinterval -method to update the value of remainingSecs
     * every second and re-rended the component
     * useState -hook stores the variable remainingSecs and keeps the flag
     * isActive
     */
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

      /** Reset function for the reset button */
      const reset = () =>{
          setRemainingSecs(0);
          setIsActive(false);
      }

    return (
        <View style = {styles.container}>
            <StatusBar barStyle= 'light-content' />
            <Text style = {styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity onPress={toggle} style = {styles.button} >
            <Text style={styles.text}>{isActive ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} style = {[styles.button, styles.buttonReset]}>
                <Text style={[styles.text, styles.buttonTextReset]}>Reset</Text>
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
    },
    buttonReset: {
        marginTop: 20,
        borderColor: '#FF851B'
    },
    buttonTextReset: {
        color: '#FF851B'
    }


})
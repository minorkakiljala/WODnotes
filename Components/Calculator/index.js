import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

/** The function for the calculator of the app
 * 
 */
export default function Calculator({state, setState, operator, setOperator, prevVal, setPrevVal}) {



    const buttonPressed = (type, resultText) => {
        if (type === "number" & resultText != '=') {
            setState(`${state}${resultText}`)
        }
        if (type === "operation") {
            setOperator(resultText)
            setPrevVal(state)
            setState(" ")
        }

        if (type === "operation" & resultText == 'DEL') {
            setState(" ")
            setOperator(null)
            setPrevVal(null)
        }
        if (type === "operation" & resultText == '+/-') {
            setState(`${parseFloat(state) * -1}`)
        }
        if(type === "number" & resultText == '.'){
            setState(`${parseFloat(state)}${resultText}`)
        }
        if (type === "number" & resultText === '=') {
            let current = parseFloat(state);
            let previous = parseFloat(prevVal)

            if (operator === "+") {
                setState(previous + current);
                setOperator(null);
                setPrevVal(null)
            }
            if (operator === "-") {
                setState(previous - current);
                setOperator(null);
                setPrevVal(null)
            }
            if (operator === "*") {
                setState(previous * current);
                setOperator(null);
                setPrevVal(null)
            }
            if (operator === "/") {
                setState(previous / current);
                setOperator(null);
                setPrevVal(null)
            }
        }

    }

    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
        let row = []
        for (let j = 0; j < 3; j++) {
            row.push(
                <TouchableOpacity onPress={() => buttonPressed("number", nums[i][j])} style={styles.btn}>
                    <Text style={styles.btntext}>{nums[i][j]}</Text>
                </TouchableOpacity>
            )
        }
        rows.push(<View style={styles.row}>{row}</View>)

    }

    let operations = ['DEL', '+/-', '+', '-', '*', '/']
    let ops = []
    for (let i = 0; i < 6; i++) {
        ops.push(
            <TouchableOpacity style={styles.btn} onPress={() => buttonPressed("operation", operations[i])}>
                <Text style={[styles.btntext, styles.white]}>{operations[i]}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View>
            <View style={styles.result}>
                <Text style={styles.resultText}>{state}</Text>
            </View>
            <View style={styles.calculation}>
                <Text style={styles.calculationText}>{setState}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                    {rows}
                </View>
                <View style={styles.operations}>
                    {ops}
                </View>
            </View>
        </View>
    )
}
/** CSS code for the style of the app */
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    resultText: {
        fontSize: 30,
        color: 'white'
    },
    btntext: {
        fontSize: 30,
    },
    white: {
        color: 'white'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    calculationText: {
        fontSize: 24,
        color: 'white'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    result: {
        flex: 2,
        backgroundColor: '#E68A62',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculation: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3,
        width: 300,
        height: 260,
        backgroundColor: '#1b2615',     
        

},
    operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: 'black'
    }

});
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from './../component/Card';
import Color from '../constants/color';
import Input from './../component/Input';
import NumberContainer from '../component/Number';
import ButtonComponent from './../component/Button';

const StartGameScreen = props => {
    var [enteredValue, setEnteredValue] = useState('');
    var [confirmed, setConfirmed] = useState(false);
    var [selectedNumber, setSelectedNumber] = useState();

    const TextValueHandler = (value) => {
        setEnteredValue(value.replace(/[^0-9]/g, ''));
    }

    const ResetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
        setSelectedNumber('');
    }

    const ConfirmInputHandler = () => {
        var chooseNumber = parseInt(enteredValue);
        if (isNaN(chooseNumber) || chooseNumber > 99 || chooseNumber < 1) {
            Alert.alert(
                'Invalid Number',
                'Number has to be a number between 1 and 99.',
                [
                    { text: 'OK', style: 'destructive', onPress: ResetInputHandler },
                ],
                { cancelable: false }
            )
            return;
        }

        setConfirmed(true);
        setSelectedNumber(chooseNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    if (confirmed) {
        var TextSelectedHandler = (
            <View style={styles.summaryContainer}>
                <Text style={styles.title}>Your Selected Number</Text>
                <NumberContainer children={selectedNumber}></NumberContainer>
                <ButtonComponent onPress={props.StartGame.bind(this,selectedNumber)}>Start Game</ButtonComponent>
            </View>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start The New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input value={enteredValue} style={styles.input} blurOnSubmit={true} autoCapitalize="none" autoCorrect={false} autoFocus={true} keyboardType="number-pad" maxLength={2} onChangeText={TextValueHandler}></Input>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button color={Color.primary} title="Reset" onPress={ResetInputHandler}></Button></View>
                        <View style={styles.button}><Button color={Color.accent} title="Confirm" onPress={ConfirmInputHandler}></Button></View>
                    </View>
                </Card>
                {TextSelectedHandler}
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10

    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginVertical: 20,
        flex:1,
        width:'100%',
        alignItems:"center",
        justifyContent:'center'
    }
});

export default StartGameScreen;
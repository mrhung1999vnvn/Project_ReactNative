import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert, Modal } from 'react-native';
import NumberContainer from '../component/Number';
import Card from '../component/Card';
import color from '../constants/color';
import BodyText from './../component/BodyText';
import { Ionicons } from '@expo/vector-icons';
import ButtonComponent from '../component/Button';


const generateNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    var random = Math.floor(Math.random() * (max - min)) + min;
    if (random === exclude) {
        return generateNumber(min, max, exclude);
    }
    else {
        return random;
    }
}



const ScreenGame = props => {
    const [round, setRound] = useState(0);
    const [randomNumber, setRandomNumber] = useState(generateNumber(1, 100, props.GuessNumber));
    var currentHigh = useRef(100);
    var currentLow = useRef(1);

    useEffect(() => {
        if (randomNumber === props.GuessNumber) {
            var userTurn = {
                round: round,
                number: randomNumber,
                status: true
            };
            { props.GameOver.bind(this, round) };
        }
    });


    const nextGuessHandler = direction => {
        if ((direction === 'lower' && randomNumber <= props.GuessNumber) || (direction === 'greater' && randomNumber >= props.GuessNumber)) {
            Alert.alert(
                'The Attention',
                'You\'re wrong',
                [
                    { text: 'OK', style: 'destructive' },
                ]
            )

            var userTurn = {
                round: round,
                number: randomNumber,
                status: true
            };

            setRound(0);
            props.GameOver(userTurn);
        }
        if (direction === 'lower') {
            currentHigh.current = randomNumber;
        }
        else {
            currentLow.current = randomNumber;
        }
        const nextNumber = generateNumber(currentLow.current, currentHigh.current, props.GuessNumber);
        setRandomNumber(nextNumber);
        setRound(current => current + 1);
    }

    return (
        <Modal visible={props.modal} animationType='slide'>
            <View style={styles.screens}>
                <BodyText>{round}</BodyText>
                <BodyText style={styles.title}>Opponent's Guess</BodyText>
                <NumberContainer>{randomNumber}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <ButtonComponent onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="ios-arrow-down" size={32} color="#fff"></Ionicons>
                        </ButtonComponent>
                    </View>
                    <View style={styles.button}>
                        <ButtonComponent onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="ios-arrow-up" size={32} color="#fff"></Ionicons>
                        </ButtonComponent>
                    </View>
                </Card>
            </View>
        </Modal>

    );
};


const styles = StyleSheet.create({
    screens: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        maxWidth: '80%'
    },
    button: {
        width: 100,
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 30,
        marginVertical: 10,

    },
});
export default ScreenGame;
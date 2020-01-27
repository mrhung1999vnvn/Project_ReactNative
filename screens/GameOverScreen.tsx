import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert,Image } from 'react-native';
import Card from '../component/Card';
import BodyText from './../component/BodyText';
import ButtonComponent from '../component/Button';


const GameOverScreen = props => {
    return (
        <View style={style.screens}>
            <Image source={require('../assets/game_over.png')} style={style.image} resizeMode='cover'></Image>
            <BodyText style={style.text}>Number of round: {props.round}</BodyText>
            <BodyText style={style.text}>Number was: {props.number}</BodyText>
            <View style={style.buttonContainer}>
                <ButtonComponent onPress={props.NewGame.bind(this,false)}>New Game</ButtonComponent>
            </View>
        </View>
    );
};


const style = StyleSheet.create({
    screens: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor:'#000',
    },
    title: {
        fontSize: 50,
        marginVertical: 10,
        fontWeight: '800'
    },
    text:{
        color:'#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        maxWidth: '80%'
    },
    image:{
        width:'80%',
        height:300
    }
});


export default GameOverScreen;
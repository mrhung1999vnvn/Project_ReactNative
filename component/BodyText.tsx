import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert, Modal } from 'react-native';

const BodyText=props=>{
    return(
        <Text style={{...style.body,...props.style}}>{props.children} </Text>
    );
}

const style=StyleSheet.create({
    body:{
        fontFamily:'open-sans-bold'
    }
});

export default BodyText;
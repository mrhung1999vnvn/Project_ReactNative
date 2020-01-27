import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity } from 'react-native';
import Colors from '../constants/color'

const ButtonComponent=props=>{
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.3}>
            <View style={{...style.button,...props.style}}>
                <Text style={style.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const style=StyleSheet.create({
    button:{
        backgroundColor:'#00796B',
        paddingVertical:12,
        paddingHorizontal:10,
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontFamily:'open-sans-bold',
        fontSize:18
    },

});


export default ButtonComponent;
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Colors from '../constants/color'


const NumberContainer = props => {
    return (
        <View style={{...styles.container,...props.style}}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        borderColor:Colors.accent,
        padding:20,
        borderRadius:10,
        marginVertical:10,
    },
    number:{
        fontSize:100,
        fontWeight:'900'
    }
});

export default NumberContainer;
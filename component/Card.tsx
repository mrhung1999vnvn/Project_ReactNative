import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';


const Card=props=>{
    return(
        <View style={{...styles.card,...props.style}}>{props.children}</View>
    );
}

const styles=StyleSheet.create({
    card:{
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
        elevation:5,
        backgroundColor:'#fff',
        padding:20,
        borderRadius:10
    }
})
export default Card;
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './component/Header';
import StartGameScreen from './screens/StartGameScreenComponent';
import GuessGameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';



const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-bold': require('./assets/font/OpenSans-Bold.ttf'),
    'open-sans-bold-italic': require('./assets/font/OpenSans-BoldItalic.ttf'),
    'open-sans-regular': require('./assets/font/OpenSans-Regular.ttf'),
  });
}

export default function App() {

  const [dataLoad, setDataLoad] = useState(false);
  const [userNumber, setUserNumber] = useState(false);
  const [userRound, setUserRound] = useState(
    {
      round: 1,
      number: 0,
      status: false
    }
  );

  if (!dataLoad) {
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoad(true)} onError={(err)=>console.log(err)}></AppLoading>;
  }

  const StartGameHandler = (value) => {
    setUserNumber(value);
    setUserRound({
      round: 1,
      number: 0,
      status: false
    });
  }

  const GameOverHandler = (value) => {
    setUserRound(value);

  }

  var content = (
    <StartGameScreen StartGame={StartGameHandler}></StartGameScreen>
  );

  if (userNumber && !userRound.status) {
    content = <GuessGameScreen modal={true} GuessNumber={userNumber} GameOver={GameOverHandler}></GuessGameScreen>;
  }
  else if (userNumber && userRound.status) {
    content = <GameOverScreen round={userRound.round} number={userRound.number} NewGame={StartGameHandler}></GameOverScreen>;
  }
  else {
    content = (
      <StartGameScreen StartGame={StartGameHandler}></StartGameScreen>
    );
  }


  return (
    <View style={styles.container}>
      <Header title={"Guess A Number"}></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

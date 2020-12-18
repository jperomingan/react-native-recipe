import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}> 
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                source={require('../assets/success.png')} 
                // source={{
                //     uri: 
                //     'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhgtvhome.sndimg.com%2Fcontent%2Fdam%2Fimages%2Fhgtv%2Ffullset%2F2015%2F11%2F10%2F0%2FCI_Costa-Farms-Ballad-aster.jpg.rend.hgtvcom.966.644.suffix%2F1447169929799.jpeg&imgrefurl=https%3A%2F%2Fwww.hgtv.com%2Foutdoors%2Fflowers-and-plants%2Fbirth-month-flowers-pictures&tbnid=LtSENaAd7wXk-M&vet=12ahUKEwjZzsDiq9btAhUVDZQKHaueDY0QMygFegUIARDZAQ..i&docid=A3mfmOt66FKeyM&w=966&h=644&q=flowers&ved=2ahUKEwjZzsDiq9btAhUVDZQKHaueDY0QMygFegUIARDZAQ'
                // }} 
                style={styles.image}
                resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed 
                    <Text style={styles.highlight}>{props.roundsNumber}
                    </Text> 
                    rounds to guess the number 
                    <Text style={styles.highlight}>{props.userNumber}
                    </Text>.
                </BodyText>
            </View>
    
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;
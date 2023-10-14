import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import PromptInput from './prompt-input';
import SearchButton from './button';
import Background from '/Users/phamdoanphuonganh/Desktop/ditmeSheCodes/SheCodesGiaVi/assets/img/objects.png';

import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Prompt ({navigation}) {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
               }}>
            <View>
            <ImageBackground source={Background} resizeMode="cover"></ImageBackground>
        </View>
        <Text style={{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            fontWeight: '700',
            color: '#000000',
            }}>Hôm nay bạn muốn ăn gì?
        </Text>
        <Text style={{ 
            fontSize: 14,
            textAlign: 'center',
            margin: 2,
            fontWeight: '300',
            color: '#000000', }}
        >
            Cho GiaVi biết ở đây nhé
        </Text>
        <PromptInput></PromptInput>
        <SearchButton title="Go to Result"
            onPress={() => navigation.navigate('Kết quả')}>
        </SearchButton>
        </View>
    )
}

export default Prompt;
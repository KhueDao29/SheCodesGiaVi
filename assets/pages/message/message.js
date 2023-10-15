import {DynamicHeader, StatusBar,SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Box1 from './box1';
import Box2 from './box2';
import Box3 from './box3';
import Deal from './deal';
import TextBox from './text-box';

const Message = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.containerimage}>
                </View>
                <Box1></Box1>
                <Box2></Box2>
                <Deal></Deal>
                <Box3></Box3>    
                <TextBox></TextBox>    
            </ScrollView>
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 5,
      
    },
    text: {
      fontSize: 42,
    },
    containerimage: {
        paddingTop: 15,
      },
      image: {
        width: 400,
        height: 1180,
      },
  });
  
export default Message;
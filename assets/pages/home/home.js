import {Image, StatusBar,SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import home from './home.png'
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.containerimage}>
                    <Image source= {home}
                            style={styles.image}
                    />
                </View>
        
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
  
export default Home;
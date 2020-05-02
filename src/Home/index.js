import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Alert,
    DeviceEventEmitter,
  } from 'react-native';
import Bridgefy from 'react-native-bridgefy-sdk';
// import {Button} from 'react-native-elements';

  function Home(){
    Bridgefy.init('0d103176-2c40-45e2-b6b8-981d22bccd17', 
    (errorCode, message)=>{
                console.log(errorCode + ":Bhangi" + message);
                },
    (client) => {
                console.log(client);
                }
    );
      
    const presshandler = () => {
        // navigation.push('Sucessfull');
      }
      const alertmessage = () => {
        setTimeout(function() {
          Alert.alert("vanet has been created")
        }, 1000)
      }
      return (
          <View style={styles.wrapper}>
              <Text style={styles.text}> Click below to create the ad-hoc network. Once network is created passengers with the app can connect to it</Text>
              {/* <Button
              title="Create"
              onPress={alertmessage}
              /> */}

          </View>
      );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: 'column',
    paddingTop: 8,
    marginLeft: 25
  },
  text: {
    textAlign: 'center',
    fontSize: 15
  }
  
})

export default Home;
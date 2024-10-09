import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Video } from 'expo-av';


const Tab = createBottomTabNavigator();

// vista 1 con imagn
function Screen1() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/images/Fidelillo.png')} 
        style={styles.image} 
      />
      <Text style={styles.text}>¡Boo!</Text>
    </View>
  );
}

// vista 2 con video
function Screen2() {
  const videoRef = React.useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={require('./assets/video/mega_man.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}

// vista 3 con botones y cambio de colors
function Screen3() {
  const [color, setColor] = useState('#ffffff');

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Button title="Rojo" onPress={() => setColor('red')} />
      <Button title="Verde" onPress={() => setColor('green')} />
      <Button title="Azul" onPress={() => setColor('blue')} />
      <Button title="Amarillo" onPress={() => setColor('yellow')} />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Vista 1" component={Screen1} />
        <Tab.Screen name="Vista 2" component={Screen2} />
        <Tab.Screen name="Vista 3" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  video: {
    width: 320,
    height: 200,
  },
});

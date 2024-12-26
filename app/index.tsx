import { Link } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import TypeWriter from "../components/TypeWriter";
import { welcomeText } from "../constants/Text";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function Index() {

  // speed at which text is rendered
  let textSpeed = 30

  // manipulating the opacity value
  let opacity = useSharedValue(0)

  // Handling the start button to be enabled only after the whole text is rendered
  const [isEnabled, setIsEnabled] = useState<boolean>(false)


  // Controlling opacity
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    }
  })

  useEffect(() => {
    opacity.value = 0
  },[])

  // Handling changes after the text is rendered
  const handleTypingComplete = () => {
    opacity.value = withSpring(1)
    setIsEnabled(true)
  }


  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/Logo.png')} style={styles.img} />
      <TypeWriter textStyle={styles.welcomeText} text={welcomeText} speed={textSpeed} onComplete={handleTypingComplete} />
      <Animated.View style={[styles.buttonView, animatedStyles]}>
        <Link replace href="/(onboarding)/loginPage" asChild disabled={!isEnabled} >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24
  },
  img: {
    width: '90%',
  },
  welcomeText: {
    color: 'grey',
    fontFamily: 'serif',
    textAlign: 'center',
    fontSize: 16,
    width: '90%'
  },
  buttonView: {
    backgroundColor: '#3077E3',
    width: '90%',
    padding: 8,
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'serif'
  }
})

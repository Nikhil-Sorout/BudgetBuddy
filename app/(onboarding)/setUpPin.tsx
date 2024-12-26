import { View, Text, Image, StyleSheet, TextInput, Pressable, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { router } from 'expo-router'

const setUpPin = () => {

    const [pin, setPin] = useState("")
    const [step, setStep] = useState(1)
    const [rePin, setRePin] = useState("")
    const [borderColor, setBorderColor] = useState("#3077E3")

    const inputRef = useRef<TextInput>(null)

    useEffect(() => {
        inputRef.current?.focus()
    })

    // when the input changes
    const handleInputChange = (value: string) => {
        console.log(value)
        const numericInput = value.replace(/[^0-9]/g, '');
        if (value.length <= 4) setPin(numericInput)
        console.log(pin)
    }


    const openKeyboard = () => {
        Keyboard.dismiss()
        inputRef.current?.focus()

    }

    const handleNext = () => {
        if (step === 1) {
            setRePin(pin)
            setPin("")
            setStep(2)
        }
        else if (step === 2) {
            if (pin === rePin) {
                console.log("PIN Setup successfully")
                setStep(1)
                setPin("")
                setRePin("")
                router.replace('/(tabs)/home')
            }
            else {
                console.log("Pins do not match")
                setPin("")
                setBorderColor('red')
            }

        }
    }

    let pinLen = pin.length

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
            <View style={styles.header}>
                <Text style={styles.headerText}>{step === 1 ? "Set up PIN" : "Confirm PIN"}</Text>
                <Text style={styles.headerDesc}>{step === 1 ? "Let's create a PIN for extra security" : "Re-enter your PIN for confirmation"}</Text>
            </View>
            <Pressable onPress={openKeyboard} style={styles.heroSection}>
                {Array(4)
                    .fill(0)
                    .map((_, index) => (
                        <View
                            key={index}
                            style={[styles.circle, { backgroundColor: index < pinLen ? "#3077E3" : "#FFFFFF", borderColor: borderColor }]} />
                    ))}
            </Pressable>
            <TextInput
                ref={inputRef}
                value={pin}
                onChangeText={handleInputChange}
                style={styles.hiddenInput}
                focusable={true}
                autoFocus={true}
                inputMode='numeric'
                maxLength={4}
                keyboardType='numeric'
            />
            <Pressable style={styles.setPinBtn} onPress={handleNext}>
                <Text style={styles.setPinText}>{step === 1 ? "Next" : "Confirm"}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        gap: 15,
        backgroundColor: 'white'
    },
    logo: {
        height: 30,
        width: '40%'
    },
    header: {
        gap: 10
    },
    headerText: {
        fontSize: 22,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    headerDesc: {
        color: 'grey',
        fontSize: 16
    },
    heroSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 20,
        gap: 20
    },
    circle: {
        borderRadius: '100%',
        borderWidth: 1,
        width: 30,
        height: 30,
        borderColor: '#3077E3'
    },
    hiddenInput: {
        position: 'absolute',
        opacity: 0
    },
    setPinBtn: {
        width: '100%',
        backgroundColor: '#3077E3',
        borderRadius: 10,
        padding: 5,
        paddingVertical: 10
    },
    setPinText: {
        fontFamily: 'serif',
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    }
})

export default setUpPin
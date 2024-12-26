import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
    active: '#3077E3',
    inactive: '#D6D6D6'
}

const { height, width } = Dimensions.get('window')

const signUpPage = () => {

    const [secureText, setSecureText] = useState<boolean>(true)
    const [name, setName] = useState<string|null>("")
    const [email, setEmail] = useState<string | null>("")
    const [pswd, setPswd] = useState<string | null>("")
    const [rePswd, setRePswd] = useState<string|null>("")
    
    // if both passwords are same or not
    let samePswd:boolean = (pswd === rePswd)

    // Checking if the all fields are filled or not
    const isButtonActive = useMemo(() => email?.trim && pswd?.trim()&&rePswd?.trim()&&name?.trim() && samePswd, [name, email, pswd, rePswd])


    const handleSignUp = ()=>{
        router.replace('/(onboarding)/loginPage')
    }

    return (

        <View style={styles.container}>
            {/* App icon at Top */}
            <Image style={styles.appLogo} source={require('../../assets/images/Logo.png')} />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Sign Up</Text>
                <Text style={styles.headerDesc}>Please sign up to continue with <Text style={styles.appName}>BudgetBuddy</Text></Text>
            </View>

            {/* Name Input */}
            <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput placeholder='Name' onChangeText={(text) => setName(text)} style={styles.Input} />
            </View>

            {/* Email Input */}
            <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput placeholder='Email' onChangeText={(text) => setEmail(text)} style={styles.Input} />
            </View>

            {/* Password Input */}
            <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Password</Text>
                <View style={styles.passwordInputView}>
                    <TextInput placeholder='Password' onChangeText={(text) => setPswd(text)} secureTextEntry={secureText} style={styles.Input} />
                    <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIcon}>
                        {secureText ? <Ionicons name="eye-outline" size={18} color={'#3077E3'} /> : <Ionicons name="eye-off-outline" color={'#3077E3'} size={18} />}
                    </TouchableOpacity>
                </View>
            </View>

            {/* Repeat Password Input */}
            <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Repeat Password</Text>
                <View style={styles.passwordInputView}>
                    <TextInput placeholder='Repeat Password' onChangeText={(text) => setRePswd(text)} secureTextEntry={secureText} style={styles.Input} />
                    <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIcon}>
                        {secureText ? <Ionicons name="eye-outline" size={18} color={'#3077E3'} /> : <Ionicons name="eye-off-outline" color={'#3077E3'} size={18} />}
                    </TouchableOpacity>
                </View>
            </View>

            {!samePswd && pswd?.trim() !== "" && <Text style={styles.samePswdAlert}>Password must be same</Text>}

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={isButtonActive ? styles.footerSignUpBtnActive : styles.footerSignUpBtnInactive} disabled={!isButtonActive} onPress={handleSignUp}>
                    <Text style={styles.signUpTxt}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>Already have an account?
                    <Link href="/(onboarding)/loginPage"><Text style={styles.LoginTxt}> Log In</Text></Link>
                </Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        padding: 15,
        gap: 20,
    },
    appLogo: {
        height: 32,
        width: '50%'
    },
    header: {
        gap: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    headerDesc: {
        color: 'grey',
        fontSize: 16
    },
    appName: {
        color: '#3077E3',
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    inputView: {
        gap: 10,
        alignItems: 'flex-start'
    },
    inputTitle: {
        fontSize: 14,
        fontFamily: 'serif'
    },
    Input: {
        backgroundColor: '#F2F7FF',
        paddingVertical: 12,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 10
    },
    passwordInputView:{
        flexDirection: 'row',
        backgroundColor: '#F2F7FF',
        borderRadius: 10,
        width: '100%',
        alignItems: 'center'
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        paddingBottom: 20, 
        paddingHorizontal: 15,
        gap: 15,
    },
    footerSignUpBtnActive: {
        backgroundColor: COLORS.active,
        width: width-30,
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        gap: 10
    },
    footerSignUpBtnInactive: {
        backgroundColor: COLORS.inactive,
        width: width-30,
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        gap: 10
    },
    signUpTxt: {
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'serif',
        fontSize: 16
    },
    footerText: {
        color: 'lightgrey',
        fontFamily: 'serif',
    },
    LoginTxt: {
        color: '#3077E3',
        fontWeight: 'bold',
    },
    samePswdAlert:{
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'serif',
        color: 'red'
    }
})

export default signUpPage
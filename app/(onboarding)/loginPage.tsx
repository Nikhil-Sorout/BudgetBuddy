import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { Link, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
    active : '#3077E3',
    inactive : '#D6D6D6'
}

const {height, width} = Dimensions.get('window')

const loginPage = () => {

    const [secureText, setSecureText] = useState<boolean>(true)
    const [email, setEmail] = useState<string|null>("")
    const [pswd, setPswd] = useState<string|null>("")
    const isButtonActive = useMemo(()=>email?.trim && pswd?.trim(), [email,pswd])
    
    const handleLogin = ()=>{
        router.replace('/(onboarding)/setUpPin')
    }



    return (
        <View style={styles.container} 
            >

            {/* App icon at Top */}
            <Image style={styles.appLogo} source={require('../../assets/images/Logo.png')} />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Login</Text>
                <Text style={styles.headerDesc}>Please log in to continue with <Text style={styles.appName}>BudgetBuddy</Text></Text>
            </View>

            {/* Email Input */}
            <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput placeholder='Email' onChangeText={(text)=>setEmail(text)} style={styles.Input} />
            </View>

            {/* Password Input */}
            <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Password</Text>
                <View style={styles.passwordInputView}>
                    <TextInput placeholder='Password' onChangeText={(text)=>setPswd(text)} secureTextEntry={secureText} style={styles.Input} />
                    <TouchableOpacity onPress={()=>setSecureText(!secureText)} style={styles.eyeIcon}>
                        {secureText? <Ionicons name="eye-outline" size={18} color={'#3077E3'}/> : <Ionicons name="eye-off-outline" color={'#3077E3'} size={18}/>}
                    </TouchableOpacity>
                </View>
            </View>

            {/* Forgot Password */}
            <Link href="/(onboarding)/forgotPswd">
                <Text style={styles.forgotPwdTxt}>Forgot Password?</Text>
            </Link>

            {/* Google Login */}
            <Text style={styles.alternateLoginText}> or Login with</Text>
            <TouchableOpacity style={styles.alternateLoginView}>
                <Image source={require('../../assets/images/googleLogo.png')} style={styles.googleLogo} />
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={isButtonActive?styles.footerLoginBtnActive:styles.footerLoginBtnInactive} disabled={!isButtonActive} onPress={handleLogin}>
                    <Text style={styles.loginTxt}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>Don't have an account?
                    <Link replace href="/(onboarding)/signUpPage"><Text style={styles.signUpTxt}> Sign Up</Text></Link>
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
    forgotPwdTxt: {
        textAlign: 'right',
        color: '#3077E3',
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    alternateLoginText: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 14,
        fontFamily: 'serif'
    },
    alternateLoginView: {
        width: '100%',
        borderWidth: .5,
        borderColor: 'lightgrey',
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 8
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        paddingBottom: 20, 
        paddingHorizontal: 15,
        gap: 15,
    },
    footerLoginBtnActive: {
        backgroundColor: COLORS.active,
        width: width-30,
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        gap: 10
    },
    footerLoginBtnInactive: {
        backgroundColor: COLORS.inactive,
        width: width-30,
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        gap: 10
    },
    loginTxt: {
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'serif',
        fontSize: 16
    },
    footerText: {
        color: 'lightgrey',
        fontFamily: 'serif',
    },
    signUpTxt: {
        color: '#3077E3',
        fontWeight: 'bold',
    },
    googleLogo: {
        width: 25,
        height: 25
    },
    eyeIcon: {
        position: 'absolute',
        right:10,

    }


})

export default loginPage
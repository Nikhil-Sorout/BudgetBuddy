import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'


const COLORS = {
    active: '#3077E3',
    inactive: '#D6D6D6'
}

const { width, height } = Dimensions.get("window")

const addWallet = () => {

    const [walletName, setWalletName] = useState("")
    const [walletAmt, setWalletAmt] = useState("")

    const isButtonActive = useMemo(() => walletName?.trim && walletAmt?.trim(), [walletName, walletAmt])

    const handleAddWallet = () => {
        router.back();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name='arrow-back-sharp' size={22} color={'white'} />
                </Pressable>
                <Text style={styles.headerTitle}>Add Wallet</Text>
            </View>
            <View style={styles.heroSec}>
                <Text style={styles.inputName}>Wallet Name</Text>
                <TextInput style={styles.inputField} placeholder='Wallet Name' placeholderTextColor={"grey"} value={walletName} onChangeText={(text) => setWalletName(text)} />
                <Text style={styles.inputName}>Amount (INR)</Text>
                <TextInput style={styles.inputField} placeholder='Enter Amount' placeholderTextColor={"grey"} value={walletAmt} onChangeText={(text) => setWalletAmt(text)} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={isButtonActive ? styles.footerAddWalletBtnActive : styles.footerAddWalletBtnInactive} disabled={!isButtonActive} onPress={handleAddWallet}>
                    <Text style={styles.addWalletText}>Add Wallet</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        backgroundColor: '#3077E3',
        padding: 15,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'flex-start'
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'semibold',
        fontFamily: 'sans'
    },
    heroSec: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10,
        gap: 10
    },
    inputName: {
        fontSize: 16
    },
    inputField: {
        backgroundColor: "#F2F7FF",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 5
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        paddingBottom: 20, 
        paddingHorizontal: 15,
        gap: 15,
    },
    footerAddWalletBtnActive: {
        backgroundColor: COLORS.active,
        width: width - 30,
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        gap: 10
    },
    footerAddWalletBtnInactive: {
        backgroundColor: COLORS.inactive,
        width: width - 30,
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        gap: 10
    },
    addWalletText: {
        color: 'white',
        fontWeight: 'bold'
    }
})
export default addWallet
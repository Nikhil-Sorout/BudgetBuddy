import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import WalletCard from '@/components/WalletCard'

const wallet = () => {

    const handleAddWallet = ()=>{
        router.push("/others/addWallet")
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name='arrow-back-sharp' size={22} color={'white'} />
                </Pressable>
                <Text style={styles.headerTitle}>Wallet</Text>
            </View>
            <View style={styles.heroSec}>
                <WalletCard />
                <Pressable style={styles.addWalletBtn} onPress={handleAddWallet}>
                    <Text style={styles.addWalletBtnText}>Add New Wallet</Text>
                </Pressable>
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
    heroSec:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        gap: 10
    },
    addWalletBtn:{
        backgroundColor:'#E5F0FF',
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 12
    },
    addWalletBtnText:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
    }
})
export default wallet
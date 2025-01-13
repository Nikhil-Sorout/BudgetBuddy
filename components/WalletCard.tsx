import { View, Text, StyleSheet, Pressable, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'


const { width, height } = Dimensions.get('window')

const WalletCard = () => {

    const infoRef = useRef<View|null>()

    const [modalVisible, setModalVisible] = useState(false)
    const [modalPostion, setModalPosition] = useState({ top: 0, right: 0 })

    const showModal = () => {
        infoRef.current?.measure((fx, fy, width, height, px, py) => {
            setModalPosition({
                top: py + height,
                right: 10
            })
            setModalVisible(true)
        })
    }



    return (
        <View style={styles.container}>
            <Text style={styles.walletName}>Main Wallet</Text>
            <Text style={styles.walletAmt}>INR 5,000</Text>
            <View style={styles.walletStatus}>
                <Text style={styles.walletStatusText}>This wallet is currently used</Text>
                <AntDesign name='checkcircle' size={22} color={'rgba(255,255,255,.8)'} />
            </View>
            <Pressable onPress={showModal} style={styles.infoBtn} ref={infoRef as any}>
                <Entypo name='dots-three-vertical' color={'white'} size={18} />
            </Pressable>
            <Modal transparent={true} visible={modalVisible}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={[styles.modal, { top: modalPostion.top, right: modalPostion.right }]}>
                            <Text style={styles.modalText}>Edit</Text>
                            <Text style={[styles.modalText,{color: 'red'}]}>Delete</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3077E3',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        borderRadius: 10,
        gap: 8,
        width: '100%'
    },
    walletName: {
        color: 'white',
        fontWeight: '300'
    },
    walletAmt: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
    },
    walletStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    walletStatusText: {
        fontSize: 14,
        color: 'rgba(255,255,255,.8)'
    },
    infoBtn: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    modal: {
        backgroundColor: 'white',
        elevation: 4,
        padding: 8,
        gap: 10,
        width: width / 3,
        height: height / 9,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        borderRadius: 10,
        position: 'absolute',

    },
    modalText: {
        fontWeight: 400,
        textAlign: 'center',
        color: "grey"

    }
})
export default WalletCard
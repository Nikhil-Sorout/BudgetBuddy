import { View, Text, StyleSheet, Pressable, FlatList, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import NotificationCard from '@/components/NotificationCard'
import { Link, router } from 'expo-router'

interface notifications {
  id: number,
  subject: string,
  desc: string,
  date: string
}
const { width, height } = Dimensions.get('window')
const notifications = () => {

  let notificationData: notifications[] = [
    {
      id: 1,
      subject: "Notification 1 ",
      desc: "This is notfication number 1",
      date: "10/01/25"
    },
    {
      id: 2,
      subject: "Notification 2",
      desc: "This is notfication number 2",
      date: "10/01/25"
    },
    {
      id: 3,
      subject: "Notification 3",
      desc: "This is notfication number 3",
      date: "10/01/25"
    },
  ]

  const [modalVisible, setModalVisible] = useState(false)
  const [modalPostion, setModalPosition] = useState({ top: 0, right: 0 })
  const optionsRef = useRef<View | null>()

  const showModal = () => {
    optionsRef.current?.measure((fx, fy, width, height, px, py) => {
      setModalPosition({
        top: py + height,
        right: 10
      })
      setModalVisible(true)
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name='arrow-back-sharp' size={22} color={'white'} />
          </Pressable>

          <Text style={styles.headerTitle}>Notification</Text>
        </View>
        <Pressable ref={optionsRef as any} onPress={showModal}>
          <Ionicons name="reorder-three" color='white' size={25} />
        </Pressable>
        <Modal transparent={true} visible={modalVisible}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={[styles.modal, { top: modalPostion.top, right: modalPostion.right }]}>
                <Text style={styles.modalText}>Mark all read</Text>
                <Text style={styles.modalText}>Remove all</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
      {notificationData.length != 0 ? <FlatList data={notificationData} renderItem={({ item }: { item: notifications }) => <NotificationCard id={item.id.toString()} subject={item.subject} desc={item.desc} date={item.date} />}
        showsVerticalScrollIndicator={false} keyExtractor={item => item.id.toString()}
      /> : <View style={styles.noNotification}>
        <Text style={styles.noNotificationText}>There is no notification for now</Text>
      </View>}


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
    position: 'relative'
  },
  leftHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 10
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'semibold',
    fontFamily: 'sans'
  },
  noNotification: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  noNotificationText: {
    color: 'lightgrey',
    textAlign: 'center'
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
export default notifications
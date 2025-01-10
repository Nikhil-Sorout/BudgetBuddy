import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NotificationCard = ({ id, subject, desc, date }: { id: string, subject: string, desc: string, date: string }) => {
    return (
        <View style={styles.container}>
            <View style={styles.overView}>
                <Text numberOfLines={1} style={styles.subj}>{subject}</Text>
                <Text numberOfLines={1} style={styles.desc}>{desc}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    overView:{
        flex:1,
        gap: 5,
    },
    subj:{
        fontWeight: 'bold',
        fontFamily: 'sans',
    },
    desc:{
        color: 'lightgrey'
    },
    date:{
        color: 'lightgrey'
    }
})

export default NotificationCard
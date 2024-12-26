import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const TransactionItemCard = ({id,title,date,amount,type}:{id:string, title:string,date:string,amount:number,type:string}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.rightSection}>
        {type === 'income'?<Text style={styles.income}> + INR {amount}</Text>:<Text style={styles.expense}> - INR {amount}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor: '#E5F0FF',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    leftSection:{
        gap: 5,
        alignItems:'flex-start',
        justifyContent: 'center'
    },
    title:{
        fontSize: 16,
        fontWeight: '500',
    },
    date:{
        color: 'grey'
    },
    rightSection:{
        alignItems:'center',
        justifyContent:'center'
    },
    income:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green'
    },
    expense:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    }
})

export default TransactionItemCard
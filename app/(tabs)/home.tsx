import { View, Text, StyleSheet, Image, Pressable, ScrollView, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import TransactionItemCard from '@/components/TransactionItemCard'
const { width, height } = Dimensions.get('window')

interface transactionItem {
  id: number,
  title: string,
  date: string,
  amount: number,
  type: string
}


const home = () => {

  let transactionData: transactionItem[] = [
    {
      id:1,
      title:'Food',
      date: '24/12/24',
      amount: 500,
      type: 'expense'
    }, {
      id:2,
      title:'Freelance',
      date: '24/12/24',
      amount: 1000,
      type: 'income'
    }, {
      id:3,
      title:'Food',
      date: '24/12/24',
      amount: 500,
      type: 'expense'
    }, {
      id:4,
      title:'Food',
      date: '24/12/24',
      amount: 500,
      type: 'expense'
    }
  ]



  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        {/* Upper Header */}
        <View style={styles.upperHeader}>
          <Image source={require('../../assets/images/Logo.png')} style={styles.appLogo} />

          {/* Right side of upper header */}
          <View style={styles.rightUpHeader}>
            <Ionicons name="notifications-outline" size={25} color={'white'} />
            <Image style={styles.profilePic} source={require('../../assets/images/Logo.png')} />
          </View>
        </View>

        {/* Lower header */}
        <View style={styles.lowerHeader}>
          <Pressable style={styles.walletBtn}>
            <Text style={styles.walletText}>Main Wallet</Text>
            <Ionicons name="chevron-down-outline" size={14} color={'white'} />
          </Pressable>
          <Text style={styles.balance}>INR 0</Text>
        </View>
      </View>

      {/* Hero Section */}

      <View style={styles.heroSection}>

        {/* Heading */}
        <View style={styles.summaryHeader}>
          <Text style={styles.summaryHeaderTitle}>Summary</Text>
          <View style={styles.selectSummaryDuration}>
            <Text style={styles.summaryDuration}>This month</Text>
            <Ionicons name="chevron-down-outline" size={14} color={'grey'} />
          </View>
        </View>

        {/* Income, expenses, pockets, duration cards */}
        <View style={styles.cardsContainer}>
          <Pressable style={styles.card}>
            <Text style={styles.cardHeader}>🤑</Text>
            <Text style={styles.cardDesc}>Income</Text>
            <Text style={styles.cardBalance}>INR 0</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text style={styles.cardHeader}>🤑</Text>
            <Text style={styles.cardDesc}>Income</Text>
            <Text style={styles.cardBalance}>INR 0</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text style={styles.cardHeader}>🤑</Text>
            <Text style={styles.cardDesc}>Income</Text>
            <Text style={styles.cardBalance}>INR 0</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text style={styles.cardHeader}>🤑</Text>
            <Text style={styles.cardDesc}>Income</Text>
            <Text style={styles.cardBalance}>INR 0</Text>
          </Pressable>
        </View>

        {/* Recent transactions header */}
        <View style={styles.transactionViewHeader}>
          <Text style={styles.transactionViewHeaderTitle}>Recent Transaction</Text>
          <Pressable style={styles.selectTransactionDuration}>
            <Text style={styles.transactionDuration}>All</Text>
            <Ionicons name="chevron-down-outline" size={14} color={'grey'} />
          </Pressable>
        </View>

        {/* Recent transactions list */}
        {transactionData.length !== 0 ? <FlatList
          showsVerticalScrollIndicator={false}
          data={transactionData}
          renderItem={({ item }: { item: transactionItem }) => <TransactionItemCard id={item.id.toString()} title={item.title} date={item.date} amount={item.amount} type={item.type} />}
          keyExtractor={item => item.id.toString()}
        /> : (
          <View style={styles.noTransaction}>
            <Text style={styles.noTransactionText}>No recent transaction for now</Text>
          </View>
        )}
      </View>

      {/* Floating add button */}
      <Pressable style={styles.floatingAddBtn}>
        <Ionicons name='add-outline' color={'#FFFFFF'} size={30} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    gap: 10,
  },
  header: {
    backgroundColor: '#3077E3',
    padding: 10,
    alignItems: 'flex-start',
    gap: 20,
  },
  appLogo: {
    height: '60%',
    width: '40%',
  },
  upperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  rightUpHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  walletBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  walletText: {
    color: '#FFFFFF',
    fontFamily: 'serif',
    textAlign: 'center',
    fontSize: 14
  },
  balance: {
    fontSize: 26,
    fontFamily: 'sans',
    color: '#FFFFFF'
  },
  profilePic: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 100
  },
  lowerHeader: {
    gap: 15
  },
  heroSection: {
    paddingHorizontal: 10,
    flex: 1
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryHeaderTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  selectSummaryDuration: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  summaryDuration: {
    color: 'grey',
    fontWeight: '400'
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 15,
    gap: 15,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  card: {
    display: 'flex',
    padding: 15,
    alignItems: 'flex-start',
    gap: 10,
    width: '45%',
    elevation: 4,
    borderRadius: '5%',
    backgroundColor: '#FFFFFF'
  },
  cardHeader: {
    fontSize: 22,
  },
  cardDesc: {
    fontSize: 16,
    fontFamily: 'serif',
  },
  cardBalance: {
    fontWeight: 'bold',
    fontSize: 16
  },
  transactionViewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionViewHeaderTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  selectTransactionDuration: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  transactionDuration: {
    color: 'grey',
    fontWeight: '400'
  },
  noTransaction:{
    justifyContent: 'center',
    alignItems:'center',
    flex:1
  },
  noTransactionText: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 16
  },
  floatingAddBtn:{
    position:'absolute',
    backgroundColor: '#3077E3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: "50%",
    bottom: 10,
    right: 20
  },
  floatingAddBtnText:{
    fontSize: 34
  }
})

export default home
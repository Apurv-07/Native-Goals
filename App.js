import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, Image } from 'react-native';
import {StatusBar} from 'expo-status-bar'
import Listmanage from './Compo/Listmanage';

export default function App() {
  var [text, setText]=useState('');
  var [goals, setGoals]=useState([]);
  var [modal, setModal]=useState(false)
  function handleClick() {
    if(text){
      setGoals((myGoals)=>[...myGoals, text]);
      setText("");
    }
    setModal(false)
  }
  return (
    <>
    <StatusBar style='inverted' />
    <View style={styles.container}>
      <View style={styles.btn}>
      <Button title='Show Goals' color={'red'} onPress={()=>{
        setModal(true)
      }} />
      </View>
      {modal && <Modal visible={modal} animationType='slide' >
        <View style={styles.imgview}>
        <Image style={styles.img} source={require('./assets/pikachu.png')} />
        <View style={styles.addgoal}>
        <TextInput placeholder='Add goals' style={styles.text} onChangeText={(text)=>{
          setText(text)
        }} value={text} />
        <Button title='Add!' onPress={handleClick}/>
      </View>
      </View>
      </Modal>}
       

        <View style={styles.goals}>
        {/* <ScrollView>
        <Text>List of Goals</Text>
        {
          goals.map((item, index)=>{
            return (
              <Text style={styles.item} key={index}>{item}</Text>
            )
          })
        }
        </ScrollView> */}
        <Listmanage goals={goals} setGoals={setGoals} />
        {/* <FlatList data={goals} renderItem={(goalItem)=>{
          return (
            <View  style={styles.item}>
            <Text style={styles.itemtext} key={goalItem.index}>{goalItem.item}</Text>
            <Button title='Delete' style={styles.btn} onPress={()=>{
              const index = goals.indexOf(goalItem.item);
              if (index > -1) { // only splice array when item is found
                goals.splice(index, 1); // 2nd parameter means remove one item only
              }
              setGoals((updatedGoals)=>[...updatedGoals])
              //setGoals([...goals])
            }} />
            </View>
          )
        }} /> */}
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
  },
  addgoal:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
  },
  text:{
    borderWidth: 2,
    marginRight: 5,
    paddingLeft: 10,
    width: '70%',
    borderColor: 'grey',
    backgroundColor: 'whitesmoke',
  },
  goals:{
    flex: 4,
    marginLeft: '10%',
  },
  img:{
    flex: 0.35, 
    width: 200,
    marginLeft: '20%',
    marginRight: 500,
    marginTop: 100,
    marginBottom: -300,
  },
  imgview:{
    flex: 1,
    flexDirection: 'column',
  },
  btn:{
    width: '71.5%',
    justifyContent: 'space-evenly',
    marginLeft: '13%',
    marginTop: 70,
    marginBottom: 10,
  }
});

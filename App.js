import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  var [text, setText]=useState('');
  var [goals, setGoals]=useState([])
  function handleClick() {
    if(text){
      setGoals((myGoals)=>[...myGoals, text])
    }
    console.log(goals)
  }
  return (
    <View style={styles.container}>
      <View style={styles.addgoal}>
        <TextInput placeholder='Add goals' style={styles.text} onChangeText={(text)=>{
          setText(text)
        }}></TextInput>
        <Button title='Add!' onPress={handleClick}/>
      </View>
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
        <FlatList data={goals} renderItem={(goalItem)=>{
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
        }} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
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
  item:{
    backgroundColor: 'antiquewhite',
    flexDirection: 'row',
    width: '80%',
    height: 40,
    textAlignVertical: 'center',
    fontSize: 20,
    paddingLeft: 20,
    margin: 10,
    borderRadius: 5,
  },
  itemtext:{
    color: 'blue', 
    flex: 1,
    textAlignVertical: 'center',
  },
  btn:{
    flex: 1,
  }

});

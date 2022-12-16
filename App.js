import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  var [text, setText]=useState('');
  var [goals, setGoals]=useState([])
  function handleClick() {
    if(text){
      setGoals([...goals, text])
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
        <Text>List of Goals</Text>
        {

        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});

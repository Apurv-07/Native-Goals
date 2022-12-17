import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, Pressable } from 'react-native'

export default function Listmanage(props) {
    var {goals, setGoals}=props;
  return (
    <FlatList data={goals} renderItem={(goalItem)=>{
        return (
          <Pressable android_ripple={{color: 'grey'}} onPress={()=>{
            const index = goals.indexOf(goalItem.item);
            if (index > -1) { // only splice array when item is found
              goals.splice(index, 1); // 2nd parameter means remove one item only
            }
            setGoals((updatedGoals)=>[...updatedGoals])
            //setGoals([...goals])
          }} >
          <View style={styles.item}>
            <Text style={styles.itemtext} key={goalItem.index}>{goalItem.item}</Text>
          </View>
          </Pressable>
        )
      }} />
  )
}
const styles=StyleSheet.create({
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
        width: '100%'
      },
      btn:{
        flex: 1,
      }
    
})

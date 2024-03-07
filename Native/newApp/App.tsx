// import { View, Text, SafeAreaView ,Image,Button, FlatList,TextInput, ScrollView, KeyboardAvoidingView} from 'react-native'
// import React, { useRef, useState } from 'react'
// // import 1 from './assets/1.png'
// const img= require('./assets/1.png')

// const hello = () => {
//   const [name,setName]=useState("user")
//   const [name1,setName1]=useState("user")
//   const a=useRef(null)

// const ar=[1,2,45,4,5,7,78,89,32]

//   return (
//     <SafeAreaView>
//       <View>
//       <Text>hello{" " + name}</Text>
//       <Text>hello{" " + name1}</Text>

//      <FlatList data={ar} renderItem={({item})=><Text>{item}</Text>}></FlatList>
//      <FlatList data={ar} renderItem={({item})=><Text>{item}</Text>}></FlatList>

//       <Image   source={{uri:'https://th.bing.com/th?id=OIP.81TzTzIYDeR-e1WkIkS6gwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'}} style={{height:200}}/>
//       {/* <TextInput placeholder='input Text'/> */}

//         <Image source={img}/>
//         <KeyboardAvoidingView

//         >
//         <TextInput
//         style={{height: 40}}
//         defaultValue={name1}
//         placeholder="hello"
//         onChangeText={(name)=>setName1(name)}
//         />
//         </KeyboardAvoidingView>

// {/* <ScrollView style={{borderColor:"red"}}>{ar.map((item,index)=><Text  key={index} style={{height:100}}>{item}</Text>)}</ScrollView> */}

//       </View>

//     </SafeAreaView>
//   )
// }

// export default hello

// [[{},{}]]<-[{},{}]


import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  VirtualizedList,
  RefreshControl,
  Modal,
} from 'react-native';

const DATA = [
  {id: 1, title: 'Title 1'},
  {id: 2, title: 'Title 2'},
  {id: 3, title: 'Title 3'},
  {id: 4, title: 'Title 4'},
  {id: 5, title: 'Title 5'},
  {id: 6, title: 'Title 6'},
  {id: 7, title: 'Title 7'},
  {id: 8, title: 'Title 8'},
  {id: 9, title: 'Title 9'},
  {id: 10, title: 'Title 10'},
  {id: 11, title: 'Title 11'},
  {id: 12, title: 'Title 12'},
  {id: 13, title: 'Title 13'},
  {id: 14, title: 'Title 14'},
  {id: 15, title: 'Title 15'},
  {id: 16, title: 'Title 16'},
  {id: 17, title: 'Title 17'},
  {id: 18, title: 'Title 18'},
  {id: 19, title: 'Title 19'},
  {id: 20, title: 'Title 20'},
  {id: 21, title: 'Title 21'},
  {id: 22, title: 'Title 22'},
  {id: 23, title: 'Title 23'},
  {id: 24, title: 'Title 24'},
  {id: 25, title: 'Title 25'},
  {id: 26, title: 'Title 26'},
  {id: 27, title: 'Title 27'},
  {id: 28, title: 'Title 28'},
  {id: 29, title: 'Title 29'},
  {id: 30, title: 'Title 30'},
  {id: 31, title: 'Title 31'},
  {id: 32, title: 'Title 32'},
  {id: 33, title: 'Title 33'},
  {id: 34, title: 'Title 34'},
  {id: 35, title: 'Title 35'},
  {id: 36, title: 'Title 36'},
  {id: 37, title: 'Title 37'},
  {id: 38, title: 'Title 38'},
  {id: 39, title: 'Title 39'},
  {id: 40, title: 'Title 40'},
  {id: 41, title: 'Title 41'},
  {id: 42, title: 'Title 42'},
  {id: 43, title: 'Title 43'},
  {id: 44, title: 'Title 44'},
  {id: 45, title: 'Title 45'},
  {id: 46, title: 'Title 46'},
  {id: 47, title: 'Title 47'},
  {id: 48, title: 'Title 48'},
  {id: 49, title: 'Title 49'},
  {id: 50, title: 'Title 50'},
  {id: 51, title: 'Title 51'},
  {id: 52, title: 'Title 52'},
  {id: 53, title: 'Title 53'},
  {id: 54, title: 'Title 54'},
  {id: 55, title: 'Title 55'},
  {id: 56, title: 'Title 56'},
  {id: 57, title: 'Title 57'},
  {id: 58, title: 'Title 58'},
  {id: 59, title: 'Title 59'},
  {id: 60, title: 'Title 60'},
  {id: 61, title: 'Title 61'},
  {id: 62, title: 'Title 62'},
  {id: 63, title: 'Title 63'},
  {id: 64, title: 'Title 64'},
  {id: 65, title: 'Title 65'},
  {id: 66, title: 'Title 66'},
  {id: 67, title: 'Title 67'},
  {id: 68, title: 'Title 68'},
  {id: 69, title: 'Title 69'},
  {id: 70, title: 'Title 70'},
  {id: 71, title: 'Title 71'},
  {id: 72, title: 'Title 72'},
  {id: 73, title: 'Title 73'},
  {id: 74, title: 'Title 74'},
  {id: 75, title: 'Title 75'},
  {id: 76, title: 'Title 76'},
  {id: 77, title: 'Title 77'},
  {id: 78, title: 'Title 78'},
  {id: 79, title: 'Title 79'},
  {id: 80, title: 'Title 80'},
  {id: 81, title: 'Title 81'},
  {id: 82, title: 'Title 82'},
  {id: 83, title: 'Title 83'},
  {id: 84, title: 'Title 84'},
  {id: 85, title: 'Title 85'},
  {id: 86, title: 'Title 86'},
  {id: 87, title: 'Title 87'},
  {id: 88, title: 'Title 88'},
  {id: 89, title: 'Title 89'},
  {id: 90, title: 'Title 90'},
  {id: 91, title: 'Title 91'},
  {id: 92, title: 'Title 92'},
  {id: 93, title: 'Title 93'},
  {id: 94, title: 'Title 94'},
  {id: 95, title: 'Title 95'},
  {id: 96, title: 'Title 96'},
  {id: 97, title: 'Title 97'},
  {id: 98, title: 'Title 98'},
  {id: 99, title: 'Title 99'},
  {id: 100, title: 'Title 100'},
];
const A = (prop: any) => {
  console.log(prop.geta);
  const [cardData, setcardData] = useState(prop.geta);
  return (
    <View style={{height: 290, backgroundColor: 'skyblue'}}>
      <Text style={{fontSize: 25}}>{cardData}</Text>
      <Button title="click" onPress={() => setcardData('false')} />
      <Button title="modal" onPress={() => prop.setModalVisibilty(true)} />

    </View>
  );
};

const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  const [modalVisibilty,setModalVisibilty]=useState(false)
  const [name,setName]=useState('')
  const [Password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [phoneNo,setPhoneNo]=useState('')
  const [validationData,setValidationData]=useState({
    name1:false,
    Password1:false,
    email1:false,
    phoneNo1:false

  })
 
  function checkValidation(){
    let newOb=validationData;
        newOb.name1=false;newOb.email1=false;newOb.phoneNo1=false;newOb.Password1=false;
        setValidationData((validationData)=> ({...validationData,...newOb}))
    
      if(!name.length){
        let newOb=validationData;
        newOb.name1=true;
        setValidationData((validationData)=> ({...validationData,...newOb}))
        
        
      }
      if(!Password.length){
        // setValidationData((validationData)=>{return {...validationData, ...{Password1:true}}})
        let newOb=validationData;
        newOb.Password1=true;
        setValidationData((validationData)=> ({...validationData,...newOb}))
     

      }
      if(!email.length){
        // setValidationData((validationData)=>{return {...validationData, ...{email1:true}}})
        let newOb=validationData;
        newOb.email1=true;
        setValidationData((validationData)=> ({...validationData,...newOb}))
   

      }
      if(!phoneNo.length){
        // setValidationData((validationData)=>{return {...validationData, ...{phoneNo1:true}}})
        let newOb=validationData;
        newOb.phoneNo1=true;
        setValidationData((validationData)=> ({...validationData,...newOb}))
   

      }
      console.log(validationData)
      // if(name.length && email.length && Password.length && phoneNo.length){
      //   console.log("Valid")
      // }
      // else{
      //   console.log("invalid")
      // }
  }
  



  

  return (
    <View>
      <Button title='openModal' onPress={()=>{setModalVisibilty(true)}}/>
      <Modal  visible={modalVisibilty} onRequestClose={()=>{setModalVisibilty(false)}} >
       <View style={{ backgroundColor:"lightgreen",marginTop:40, 
    borderRadius: 5,}} >
          <TextInput  value={name} placeholder='Name' onChangeText={setName}></TextInput>
          <TextInput value={Password} textContentType='password' placeholder='Password' onChangeText={setPassword}></TextInput>
          <TextInput value={email} textContentType='emailAddress' placeholder='email' onChangeText={setEmail}></TextInput>
          <TextInput value={phoneNo} textContentType='telephoneNumber' placeholder='Phone No.' onChangeText={setPhoneNo}></TextInput>

          
          <Button title='closeMOdal' onPress={()=>{setModalVisibilty(false)}}/>
          <Button title='checkValidation' onPress={checkValidation}/>
          {(
            <View> 
              {((validationData.name1) &&<View><Text>Name is empty</Text></View>)}  
            </View>
          )}

      </View>
        </Modal>
          </View>
    // <View>
    //    <StatusBar backgroundColor={"red"} />
    //   <FlatList
    //     data={DATA}
    //     initialNumToRender={5}
    //     renderItem={({item}) => <A geta={item.title} setModalVisibilty={setModalVisibilty} />}
    //     keyExtractor={item => item.id}
    //     refreshControl={
    //       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //     }
    //   />
    //     <Modal presentationStyle='pageSheet' visible={modalVisibilty} onRequestClose={()=>{setModalVisibilty(false)}} >
    //    <View style={{height:100, backgroundColor:"lightgreen",marginTop:40, border: '1px solid black',
    // borderRadius: 5,}} >
    //       <TextInput  placeholder='Edit Details'></TextInput>
          
    //       <Button title='closeMOdal' onPress={()=>{setModalVisibilty(false)}}/>
      

    //   </View>
    //     </Modal> 
    //     </View>
  );
};

export default App;

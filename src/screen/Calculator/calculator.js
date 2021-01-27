import React, { Component , useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert
    // Input
  } from 'react-native';
  import Animated from 'react-native-reanimated'
  import {Input,Button} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Entypo'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAnt from 'react-native-vector-icons/AntDesign'

const calculator=()=>{
    const fall = new Animated.Value(1)

    const[inputSatu,setInputSatu]=useState(0)
    const[inputDua,setInputDua]=useState(0)
    const[inputTiga,setInputTiga]=useState(0)

    const[isInputSatu,setIsInputSatu]=useState(false)
    const[isInputDua,setIsInputDua]=useState(false)
    const[isInputTiga,setIsInputTiga]=useState(false)
    
    const[totalPerhitungan,setTotalPerhitungan]=useState(0)
    

    const firstInput=(number)=>{
        let angkaParse = parseInt(number)
        console.log(number ,'button jalan')
        if(number.length === 0 ){
            setInputSatu(0)
            setIsInputSatu(false)
        }else {
            setInputSatu(angkaParse)
            setIsInputSatu(true)
        }
    }
    const secondInput=(number)=>{
        console.log(number ,'button jalan')
        let angkaParse = parseInt(number)
        if(number.length === 0){
            setInputDua(0)
            setIsInputDua(false)
        }else {
            setInputDua(angkaParse)
            setIsInputDua(true)
        }
    }
    const thirdInput=(number)=>{
        console.log(number ,'button jalan')
        let angkaParse = parseInt(number)

        if(number.length === 0 ){
            setInputTiga(0)
            setIsInputTiga(false)
        }else {
            setInputTiga(angkaParse)
            setIsInputTiga(true)
        }
        
    }

    const onTambah=()=>{
        let total = 0 ;
        let dataPerhitungan = []
        if(isInputSatu && isInputDua && isInputTiga){
            total += inputSatu + inputDua + inputTiga
        }else if(isInputSatu && isInputDua){
            total += inputSatu + inputDua
        }else if (isInputSatu && isInputTiga){
            total += inputSatu + inputTiga
        }else if (isInputDua && isInputTiga){
            total +=inputDua + inputTiga
        }else {
            // alert('Tidak Boleh Hanya Mengisi 1 Input')
          Alert.alert('TIdak boleh hanya mengisi 1 input')
        }
        setTotalPerhitungan(total)
        console.log(total)
    }
    const onKali=()=>{
        let total = 0 ;
        let dataPerhitungan = []
        if(isInputSatu && isInputDua && isInputTiga){
            total += inputSatu * inputDua * inputTiga
        }else if(isInputSatu && isInputDua){
            total += inputSatu * inputDua
        }else if (isInputSatu && isInputTiga){
            total += inputSatu * inputTiga
        }else if (isInputDua && isInputTiga){
            total +=inputDua * inputTiga
        }else {
            Alert.alert('TIdak boleh hanya mengisi 1 input')
        }    
        setTotalPerhitungan(total)
        console.log(total)   
    }
    const onBagi=()=>{
        let total = 0 ;
        let dataPerhitungan = []
        if(isInputSatu && isInputDua && isInputTiga){
            total += inputSatu / inputDua / inputTiga
        }else if(isInputSatu && isInputDua){
            total += inputSatu /inputDua
        }else if (isInputSatu && isInputTiga){
            total += inputSatu / inputTiga
        }else if (isInputDua && isInputTiga){
            total +=inputDua / inputTiga
        }else {
            Alert.alert('TIdak boleh hanya mengisi 1 input')
        }    
        setTotalPerhitungan(total)
        console.log(total)      
    }
    const onKurang=()=>{
        let total = 0 ;
        let dataPerhitungan = []
        if(isInputSatu && isInputDua && isInputTiga){
            total += inputSatu - inputDua - inputTiga
        }else if(isInputSatu && isInputDua){
            total += inputSatu - inputDua
        }else if (isInputSatu && isInputTiga){
            total += inputSatu - inputTiga
        }else if (isInputDua && isInputTiga){
            total +=inputDua - inputTiga
        }else {
            Alert.alert('TIdak boleh hanya mengisi 1 input')
        }  
        setTotalPerhitungan(total)
        console.log(total) 
    }
    return (
        <>
            <StatusBar backgroundColor={'#FF8E53'} barStyle={'light-content'}/>
           <Animatable.View animation='fadeIn' style={{flex:1,backgroundColor:'black',opacity:Animated.add(0.1,Animated.multiply(fall,0.9))}}>
               <SafeAreaView>
                <View  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:30}}>Calculator</Text>
                </View>
                <View style={{height:150,width:'100%',backgroundColor:'#dfe6e9',marginTop:20,display:'flex',alignItems:'center',justifyContent:'center',padding:10}}>
                    <Text style={{fontWeight:'700',fontSize:25}}>RESULT</Text>
                    <Text style={{fontWeight:'800',fontSize:35}}>{totalPerhitungan}</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Input placeholder={'Your Number'}  onChangeText={firstInput} style={{color:'white'}}  rightIcon={{type:'AntDesign',name:isInputSatu?'check':'close',color:isInputSatu?'green':'red'}}   />
                    <Input placeholder={'Your Number'}  onChangeText={secondInput} style={{color:'white'}} rightIcon={{type:'AntDesign',name:isInputDua?'check':'close',color:isInputDua?'green':'red'}}/>
                    <Input placeholder={'Your Number'}  onChangeText={thirdInput} style={{color:'white'}} rightIcon={{type:'AntDesign',name:isInputTiga?'check':'close',color:isInputTiga?'green':'red'}}/>
                </View>
                <View style={{height:300,width:'100%',backgroundColor:'red', flex:1, justifyContent:'center',flexDirection:'row'}}>
                    <View style={{height:90,width:90,backgroundColor:'gray',borderRadius:10, margin:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Button
                        // Icon={<Icon name='plus' size={50} color='black'/>}
                        title={<Icon name='plus' size={50} color='black'/>}
                        onPress={onTambah}
                        />         
                    </View>
                    <View style={{height:90,width:90,backgroundColor:'gray',borderRadius:10,margin:5,display:'flex',justifyContent:'center',alignItems:'center'}} >
                        <Button
                        // Icon={<Icon name='plus' size={50} color='black'/>}
                        title={<Icon name='minus' size={50} color='black'/>}
                        onPress={onKurang}
                        />    
                    
                    </View>
                    <View style={{height:90,width:90,backgroundColor:'gray',borderRadius:10,margin:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Button
                        // Icon={<Icon name='plus' size={50} color='black'/>}
                        title={<IconMCI name='division' size={50} color='black'/>}
                        onPress={onBagi}
                        /> 
                    </View>
                    <View style={{height:90,width:90,backgroundColor:'gray',borderRadius:10,margin:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Button
                        // Icon={<Icon name='plus' size={50} color='black'/>}
                        title={<IconAnt name='close' size={50} color='black'/>}
                        onPress={onKali}
                        /> 
                        
                    </View>
                </View>
               </SafeAreaView>
           </Animatable.View>
        </>
    )
}

export default calculator
import React,{ useState } from 'react';
import {StatusBar,View,Text,TouchableOpacity,StyleSheet,Image,TextInput,Button,ScrollView,FlatList,ActivityIndicator,Alert,ImageBackground} from 'react-native';

const App = ({ navigation }) =>{

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    
    navigation.navigate('Dashboard');
  };
  
  return(
    <ImageBackground source={require('./images/food.jpg')} resizeMode='cover' style={{flex:1}}>
    <View style={styles.container}>
        <StatusBar style='auto'/>
        
    
     <Text style={styles.head}>Trip Haven</Text>
      <Image source={require('./images/logo-agri1.png')} style={styles.img}/>
      
      <View>
      <Text style={styles.txt}>Username</Text>
      <TextInput style={styles.txtinput1} placeholder='Username' placeholderTextColor={'white'}></TextInput>
      <Text style={styles.txt2}>Email</Text>
      <TextInput style={styles.txtinput2} placeholder='Email' placeholderTextColor={'white'}></TextInput>
      <Text style={styles.txt2}>Password</Text>
      <TextInput style={styles.txtinput2} placeholder='Password' placeholderTextColor={'white'}></TextInput>
      <Button title='Sign Up' style={styles.btn1} color={'red'}  onPress={(handleSignIn)}/>

      </View> 

      <View style={styles.footer}>
        
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.linkText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
        <Text style={styles.linkText}>Reset here</Text>
      </TouchableOpacity>
      </View>
    </View> 
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',


  },
  img:{
    width:220,height:220,marginTop:20,marginTop:20,borderColor:'white',borderWidth:2,borderRadius:30
  },
  head:{
    fontSize:50,fontWeight:'bold',color:'white'
  },
  txtinput1:{
    height:45,borderWidth:2,width:220,borderRadius:25,textAlign:'center',borderColor:'white',color:'white'
  },txtinput2:{
    height:45,borderWidth:2,width:220,borderRadius:25,textAlign:'center',marginBottom:20,borderColor:'white',color:'white'
  },
  btn1:{
    color:'red'
  },
  txt:{
    textAlign:"center",marginTop:18,marginBottom:5,fontWeight:'bold',fontSize:18,color:'white'
  },
  txt2:{
    textAlign:"center",marginTop:10,marginBottom:5,fontWeight:'bold',fontSize:18,color:'white'
  },
  footer:{
    flexDirection:'row',justifyContent:'space-around',padding:20,
  }
  ,footert:{
    fontSize:16,fontWeight:'bold',color:'white'
  },linkText:{
    color:'white',marginBottom:10,fontSize:16,fontWeight:'bold',color:'white',marginHorizontal:15
  }


});


export default App;

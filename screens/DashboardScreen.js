/* import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, ImageBackground } from 'react-native';

const DashboardScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigateToCategory = category => {
    console.log(`Navigating to ${category}`);
  };

  const destinations = [
    { id: '1', name: 'Crop Informations', image: require('./images/paris.jpg') },
    { id: '2', name: 'Weather Updates', image: require('./images/new_york.jpg') },
    { id: '3', name: 'Market Updates', image: require('./images/tokyo.jpg') },
    { id: '4', name: 'Rome', image: require('./images/rome.jpg') },
    { id: '5', name: 'London', image: require('./images/london.jpg') },
  ];

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ImageBackground source={require('./images/back.jpg')} resizeMode='cover' style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Explore</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for consults "
          onChangeText={setSearchTerm} placeholderTextColor={'white'}
          value={searchTerm}
        />
        <ScrollView contentContainerStyle={styles.destinationsContainer}>
          {filteredDestinations.map(destination => (
            <View key={destination.id} style={styles.destinationContainer}>
              <Image source={destination.image} style={styles.destinationImage} />
              <Text style={styles.destinationName}>{destination.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  searchBar: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: 'white',
  },
  destinationsContainer: {
    alignItems: 'center',
  },
  destinationContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  destinationImage: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  destinationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DashboardScreen;

 */


import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native';

const DashboardScreen = ({navigation}) => {

  const handleSignIn = () => {
    
    navigation.navigate('SignIn');
  };
  
  return(
    <ScrollView style={styles.scroll}>
    <View style={styles.container}>
        <ImageBackground source={require('./images/weather.jpg')} style={[styles.img1, styles.img]}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
          <Image source={require('./images/weather-logo.png')} style={styles.logo} />
          <Text style={styles.txt1}>20°C</Text>
          <Text style={styles.txt2}>Weather</Text>
        </ImageBackground>
      
      <ImageBackground source={require('./images/pests.jpg')} style={[styles.img1,styles.img]}>
      <Text style={styles.txt3}>Pests & Diseases</Text>
      </ImageBackground>
      <ImageBackground source={require('./images/fruits.jpg')} style={[styles.img1,styles.img]}>
      <Text style={styles.txt4}>Market Updates</Text>
      </ImageBackground>
      <ImageBackground source={require('./images/forum.jpg')} style={[styles.img1,styles.img]}>
      <Text style={styles.txt5}>Forum</Text>
      </ImageBackground>
      <ImageBackground source={require('./images/expert.jpg')} style={[styles.img1,styles.img]}>
      <Text style={styles.btn}>Expert Consultation</Text>
      <View style={styles.foot}>
        <Image source={require('./images/fb.png') } style={styles.fb}/>
        <Image source={require('./images/insta.png') } style={styles.fb}/>
        <Image source={require('./images/yt.png') } style={styles.yt}/>
      </View>
      </ImageBackground> 
    </View>
    </ScrollView>
  )
  
}

const styles = StyleSheet.create({
  scroll:{},
  container: {
    flex: 1,
    alignItems: 'center',justifyContent:'center',

  },
  img:{
    width:'100%',height:200
  },
  img1:{
    borderBottomColor:'white',borderBottomWidth:2
  },
  back:{fontSize:20,margin:15,fontWeight:'bold',color:'white',width:80,},

  logo:{
    width:100,height:100,margin:20,borderRadius:30
  },
  txt1:{fontSize:50,color:'white',position:'absolute',left:280,top:80},
  txt2:{fontSize:30,color:'white',position:'absolute',left:280,top:145,fontWeight:'bold'},
  txt3:{fontSize:30,color:'white',position:'absolute',left:20,top:145,fontWeight:'bold'},
  txt4:{fontSize:30,color:'white',position:'absolute',left:180,top:145,fontWeight:'bold'},
  txt5:{fontSize:30,color:'white',position:'absolute',left:20,top:145,fontWeight:'bold'},
  btn:{fontSize:30,color:'white',backgroundColor:'#0062ff',width:290,textAlign:'center',paddingBottom:5,borderRadius:30,position:'absolute',
  top:20,left:60,fontWeight:'bold'},
  foot:{backgroundColor:'#0062ff',flexDirection:'row',alignItems:'center',justifyContent:'center',position:'absolute',bottom:0,width:420,paddingLeft:25},

  fb:{
    width:40,height:40,marginRight:40
  },
  yt:{width:60,height:60}

})

export default DashboardScreen;
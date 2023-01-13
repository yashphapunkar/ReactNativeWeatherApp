import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import NewButton from '../components/NewButton';
const key = '091a992237a2d900ab0c80febe121f2d';

function InputScreen(props) {

    const [cityName, setCityName] = useState('');
    const [temp, setTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [maxTemp, setMaxTemp] = useState('');
    const [minTemp, setMinTemp] = useState('');
    const [weatherText, setWeatherText] = useState('');
    const [windDetails, setWindDetails] = useState([]);
    const [pressure, setPressure] = useState('');
 
    const getCityName = (e) => {
        setCityName(e);
    }


    useEffect( () => {

        const getWeatherData = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`);
            const data = await response.json();
            setTemp(data.main.temp);
            setHumidity(data.main.humidity);
            setMaxTemp(data.main.temp_max);
            setMinTemp(data.main.temp_min);
            setWeatherText(data.weather[0].description);
            setWindDetails([data.wind.deg, data.wind.gust, data.wind.speed]);
            setPressure(data.main.pressure);
    
        }
        
        const identifier = setTimeout(getWeatherData, 500);

        return () => {
            clearTimeout(identifier);
        }

    }, [cityName]);

   
    const onPressHandler = () => {
        const obj = {
            name: cityName, 
            temprature: temp, 
            maxTemp: maxTemp, 
            minTemp: minTemp, 
            humidity: humidity, 
            weatherText: weatherText,
            windDetails: windDetails,
            pressure: pressure
        }
        
        navigation.navigate('WeatherScreen',  obj)
    }



    const navigation = useNavigation();

    return (

        <View style={styles.container}> 
          <Text style={styles.heading}>Weather</Text>
          <Text style={styles.text}>Welcome to the weather app</Text>
          <View style= {styles.addContainer}>
            <Image style={styles.img} source={require('../assets/sun2.gif')} />
            <TextInput onChangeText={getCityName} placeholder='Enter City Name Here' placeholderTextColor='grey' style={styles.textInput} />
            <NewButton title='Find Weather' onPress={onPressHandler}/> 
          </View>
          <StatusBar style="auto" />
        </View>
      );
}


export default InputScreen;


const styles = StyleSheet.create({
    container: {  
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    backgroundColor: '#1A120B',
    
    },
  
    addContainer: {
      alignItems: 'center',
      marginTop: '8%',
      width: '95%',
      marginBottom: '30%',
      borderRadius: 40
    },
  
    heading: {
      marginTop: 100,
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 2,
      color: 'darkgrey',
    },
  
    text: {
      fontWeight: 'bold',
      color: 'dimgrey'
    },
  
    textInput: {
      borderWidth: 1,
      width:'85%',
      marginTop:'4%',
      padding: 7,
      borderRadius: 8,
      borderColor: 'grey',
      color: 'lightgrey',
    },
  
    img: {
      width: '600%',
      height: '50%',
      resizeMode: 'contain',
    }
  });
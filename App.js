import { StyleSheet, View} from 'react-native';
import Routes from './Navigation/Routes';

export default function App() {
  return (
      <Routes style={styles.mainContainer}/>
  ); 
}


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1A120B'
 }
});

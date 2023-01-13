import {View, Pressable, Text, StyleSheet} from 'react-native';


function NewButton(props) {
   return (
    <Pressable onPress={props.onPress} android_ripple='grey' style={styles.pressable}>
    <View style={styles.button}>
        
            <Text style={styles.buttonText}>{props.title}</Text>
    </View>
    </Pressable>
   )
}

export default NewButton;

const styles = StyleSheet.create({

    button: {
        padding: '4.5%',
        marginTop: '7%',
        backgroundColor: 'dimgrey',
        borderRadius: 9,
        elevation: 8,
    },

   buttonText: {
    fontWeight: 'bold',
    color: 'black'
    },
    
})
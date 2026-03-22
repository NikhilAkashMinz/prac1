
import { StyleSheet,Platform,SafeAreaView, Text, Alert,View} from 'react-native';

export default function App() {
  const onPressButton = () => Alert.alert("Button Pressed");
  const onLongPressButton = () => Alert.alert("Button Long Pressed");
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.View1}>
          <Text style={styles.text}>Hello World</Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'android' ? 'aqua' : 'red',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  View1: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2:{
    width: 200,
    height: 200,
    borderRadius: 100,

  },
  text:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  } 
});

  import * as React from 'react';
  import { View, Text, StyleSheet, Button} from 'react-native';
  
  function ModalScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      container: {
           flex: 1,
          //  alignItems: 'center', justifyContent: 'center',
          color: "#fff"
      }
  })
  
  export default ModalScreen;
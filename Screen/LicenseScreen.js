import * as React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

function LicenseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>License</Text>
      <Button 
        title="Home" onPress={() => navigation.navigate('Home')}
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

export default LicenseScreen;
import * as React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details',{detailId:101})} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    }
})

export default HomeScreen;
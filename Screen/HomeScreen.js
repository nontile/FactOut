import * as React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

function HomeScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>{route.params?.complete}</Text>
      <Button 
        title="Go to Detail"
        onPress={()=>navigation.navigate('Details',{detailId:101})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    }
})

export default HomeScreen;
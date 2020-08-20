/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image
} from 'react-native';
import Cat from './src/components/Cat';
import MyImage from './src/components/MyImage';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <ScrollView>
      <Text>Hello Friend</Text>
      <View>
        <Text>Some More Text</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png"
          }}
          style={{ width: 200, height: 200 }}
        ></Image>
        <TextInput 
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue="Text Input Box"
        />
      </View>
      <Cat />
      <MyImage image_url="https://reactnative.dev/docs/assets/p_cat1.png"/>
    </ScrollView>
    </View>
  );
};

export default App;

import React from 'react';
import { View, Image, Text } from 'react-native';

const MyImage = (props) => {
    return(
        <View>
            <Image 
                source={{ uri: props.image_url}}
                style={{ width: 200, height: 200}}
            />
            <Text>Hello, i am your cat</Text>
        </View>
    );
}

export default MyImage;

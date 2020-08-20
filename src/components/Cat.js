import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);
    
    return(
        <View>
            <Text>
                I am {props.name}, and i am {isHungry ? "hungry": "full"}
            </Text>
            <Button
                onPress={() => {
                    setIsHungry(!isHungry);
                }}
                
                title={isHungry ? "Pour me some milk" : "Thank you!"}
            >
            </Button>
        </View>
    );
}

const Cafe = () => {
    return(
        <View>
            <Cat name="Uzair" />
            <Cat name="Mujji" />
            <Cat name="Ahsun" />
        </View>
    );
}

export default Cafe;
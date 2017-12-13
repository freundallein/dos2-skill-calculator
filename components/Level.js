import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import {translateInterface} from '../namespace';

class Level extends React.Component {
    render() {
        const language = this.props.language;
        const level = this.props.level;
        const increase = this.props.increase;
        const decrease = this.props.decrease;
        const buttonColor = this.props.buttonColor;
        const styles = this.props.styles;

        return <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: .3}}>
                <Button title={"-"}
                        color={buttonColor}
                        onPress={decrease}/>
            </View>
            <View style={{flex: .4}}>
                <Text style={styles.header}>
                    {translateInterface('level', language)} {level}
                </Text>
            </View>
            <View style={{flex: .3}}>
                <Button title={"+"}
                        color={buttonColor}
                        onPress={increase}
                />
            </View>
        </View>
    }
}

export default Level;
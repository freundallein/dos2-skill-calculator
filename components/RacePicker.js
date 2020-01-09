import React from 'react';
import {
    Text,
    View,
    Picker
} from 'react-native';
import {translateInterface} from '../namespace';

class RacePicker extends React.Component {
    render() {
        const language = this.props.language;
        const styles = this.props.styles;
        const race = this.props.race;
        const changeRace = this.props.changeRace;

        return <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: .5}}>
                <Text style={styles.header}>
                   {translateInterface('race', language)}
                </Text>
            </View>
            <View style={{flex: .5}}>
                <Picker
                    selectedValue={race}
                    onValueChange={changeRace}>
                    <Picker.Item label="Human" value="human"/>
                    <Picker.Item label="Elf" value="elf"/>
                    <Picker.Item label="Dwarf" value="dwarf"/>
                    <Picker.Item label="Lizard" value="lizard"/>
                    <Picker.Item label="Undead Human"
                                 value="undead_human"/>
                    <Picker.Item label="Undead Elf"
                                 value="undead_elf"/>
                    <Picker.Item label="Undead Dwarf"
                                 value="undead_dwarf"/>
                    <Picker.Item label="Undead Lizard"
                                 value="undead_lizard"/>
                </Picker>
            </View>
        </View>
    }
}

export default RacePicker;
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Picker,
    Switch,
    FlatList
} from 'react-native';
import {
    IndicatorViewPager,
    PagerTitleIndicator
} from 'rn-viewpager';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            race: 'human',
            gender: true,
            level: 0,
            minLevel: 0,
            maxLevel: 20,
            availAttributes: 0,
            availCombat: 0,
            availCivil: 0,
            availTraits: 1
        };
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 20, backgroundColor: 'white'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .5}}>
                        <Text>Race</Text>
                    </View>
                    <View style={{flex: .5}}>
                        <Picker
                            selectedValue={this.state.race}
                            onValueChange={(itemValue, itemIndex) => this.setState({race: itemValue})}>
                            <Picker.Item label="Human" value="human"/>
                            <Picker.Item label="Elf" value="elf"/>
                            <Picker.Item label="Dwarf" value="dwarf"/>
                            <Picker.Item label="Undead" value="undead"/>
                            <Picker.Item label="Lizard" value="lizard"/>
                        </Picker>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .5}}>
                        <Text>{this.state.gender ? 'Male' : 'Female'}</Text>
                    </View>
                    <View style={{flex: .5}}>
                        <Switch
                            onValueChange={(value) => this.setState({gender: value})}
                            value={this.state.gender}/>
                    </View>
                </View>
                <IndicatorViewPager
                    style={{flex: 1}}
                    indicator={<PagerTitleIndicator
                        titles={['Attributes', 'Combat' +
                        ' Abilities', 'Civil Abilities', 'Talents']}/>}
                >
                    <View style={{backgroundColor: 'cadetblue'}}>
                        <Text>Attributes</Text>
                        <FlatList
                            data={[
                                {key: 'Strength', value: 10},
                                {key: 'Finesse', value: 10},
                                {key: 'Intelligence', value: 10},
                                {key: 'Constitution', value: 10},
                                {key: 'Wits', value: 10},
                                {key: 'Memory', value: 10}
                            ]}
                            renderItem={({item}) => <Text
                                style={styles.item}>{item.key}
                                ---> {item.value}</Text>}/>
                    </View>
                    <View style={{backgroundColor: 'cornflowerblue'}}>
                        <Text>Combat Abilities</Text>
                        <FlatList
                            data={[
                                {key: 'Dual Wielding', value: 0},
                                {key: 'Ranged', value: 0},
                                {key: 'Single-Handed', value: 0},
                                {key: 'Two-Handed', value: 0},
                                //-------------------
                                {key: 'Leadership', value: 0},
                                {key: 'Perseverance', value: 0},
                                {key: 'Retribution', value: 0},
                                //-------------------
                                {key: 'Aerotheurge', value: 0},
                                {key: 'Geomancer', value: 0},
                                {key: 'Huntsman', value: 0},
                                {key: 'Hydrosophist', value: 0},
                                {key: 'Necromancer', value: 0},
                                {key: 'Polymorph', value: 0},
                                {key: 'Pyrokinetic', value: 0},
                                {key: 'Scoundrel', value: 0},
                                {key: 'Summoning', value: 0},
                                {key: 'Warfare', value: 0}
                            ]}
                            renderItem={({item}) => <Text
                                style={styles.item}>{item.key}
                                ---> {item.value}</Text>}/>
                    </View>
                    <View style={{backgroundColor: 'cornflowerblue'}}>
                        <Text>Civil Abilities</Text>
                        <FlatList
                            data={[
                                {key: 'Bartering', value: 0},
                                {key: 'Lucky Charm', value: 0},
                                {key: 'Persuasion', value: 0},
                                {key: 'Loremaster', value: 0},
                                {key: 'Telekinesis', value: 0},
                                {key: 'Sneaking', value: 0},
                                {key: 'Thievery', value: 0},
                            ]}
                            renderItem={({item}) => <Text
                                style={styles.item}>{item.key}
                                ---> {item.value}</Text>}/>
                    </View>
                    <View style={{backgroundColor: 'red'}}>
                        <Text>Talents</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
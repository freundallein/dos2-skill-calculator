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
import character, {mapObject} from './logic';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {char: character};
    }

    renderPlan(item, plan) {
        return <View key={item.key} style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{flex: .3}}>
                <Button title={"-"}
                        onPress={() => {
                            let char = this.state.char;
                            char.setDown(plan, item.key);
                            this.setState({char: char})
                        }
                        }
                />
            </View>
            <View style={{flex: .4}}>
                <Text>{item.key} --> {item.value}</Text>
            </View>
            <View style={{flex: .3}}>
                <Button title={"+"}
                        onPress={() => {
                            let char = this.state.char;
                            char.setUp(plan, item.key);
                            this.setState({char: char})
                        }
                        }
                />
            </View>
        </View>
    };

    render() {
        const attributes = mapObject(this.state.char.attributes);
        const combat = mapObject(this.state.char.combat);
        const civil = mapObject(this.state.char.civil);
        const talents = mapObject(this.state.char.talents);

        return (
            <View style={{flex: 1, paddingTop: 20, backgroundColor: 'white'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .5}}>
                        <Text>Race</Text>
                    </View>
                    <View style={{flex: .5}}>
                        <Picker
                            selectedValue={this.state.char.race}
                            onValueChange={(value, itemIndex) => {
                                let char = this.state.char;
                                char.setRace(value);
                                this.setState({char: char})
                            }}>
                            <Picker.Item label="Human" value="human"/>
                            <Picker.Item label="Elf" value="elf"/>
                            <Picker.Item label="Dwarf" value="dwarf"/>
                            <Picker.Item label="Lizard" value="lizard"/>
                        </Picker>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .5}}>
                        <Text>{this.state.char.gender ? 'Male' : 'Female'}</Text>
                    </View>
                    <View style={{flex: .5}}>
                        <Switch
                            onValueChange={(value) => {
                                let char = this.state.char;
                                char.gender = value;
                                this.setState({char: char})
                            }
                            }
                            value={this.state.char.gender}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .3}}>
                        <Button title={"-"}
                                onPress={() => {
                                    let char = this.state.char;
                                    char.levelDown();
                                    this.setState({char: char})
                                }
                                }/>
                    </View>
                    <View style={{flex: .4}}>
                        <Text>Level:{this.state.char.level}</Text></View>
                    <View style={{flex: .3}}>
                        <Button title={"+"}
                                onPress={() => {
                                    let char = this.state.char;
                                    char.levelUp();
                                    this.setState({char: char})
                                }
                                }
                        /></View>
                </View>
                <IndicatorViewPager
                    style={{flex: 1}}
                    indicator={
                        <PagerTitleIndicator
                            titles={['Attributes', 'Combat', 'Civil', 'Talents', 'Summary']}
                        />}>
                    <View style={{backgroundColor: 'cadetblue'}}>
                        <Text>Attributes</Text>
                        <Text>Available points
                            -> {this.state.char.getPoints().attributes}</Text>
                        <FlatList
                            data={attributes}
                            renderItem={({item}) => this.renderPlan(item, 'attributes')}
                        />
                    </View>
                    <View style={{backgroundColor: 'cornflowerblue'}}>
                        <Text>Combat Abilities</Text>
                        <Text>Available points
                            -> {this.state.char.getPoints().combat}</Text>
                        <FlatList
                            data={combat}
                            renderItem={({item}) => this.renderPlan(item, 'combat')}
                        />
                    </View>
                    <View style={{backgroundColor: 'cornflowerblue'}}>
                        <Text>Civil Abilities</Text>
                        <Text>Available points
                            -> {this.state.char.getPoints().civil}</Text>
                        <FlatList
                            data={civil}
                            renderItem={({item}) => this.renderPlan(item, 'civil')}
                        />
                    </View>
                    <View style={{backgroundColor: 'white'}}>
                        <Text>Talents</Text>
                        <Text>Available points
                            -> {this.state.char.getPoints().talents}</Text>
                        <FlatList
                            data={talents}
                            renderItem={({item}) => {
                                return <View key={item.key} style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={{flex: .5}}>
                                        <Text>{item.key}</Text>
                                    </View>
                                    <View style={{flex: .5}}>
                                        <Button
                                            title={(item.value) ? 'Yes' : 'No'}
                                            onPress={() => {
                                                let char = this.state.char;
                                                char.switchTalent(item.key);
                                                this.setState({char: char})
                                            }
                                            }/>
                                    </View></View>
                            }}
                        />
                    </View>
                    <View style={{backgroundColor: 'red'}}>
                        <Text>Summary</Text>
                        <Text>Health -> {this.state.char.getHealth()}</Text>
                        <Text>
                            Physical Armor
                            -> {this.state.char.getArmor().phArmor} |
                            Magical Armor
                            -> {this.state.char.getArmor().mArmor}
                        </Text>
                        <Text>
                            Restore Physical Armor
                            -> {this.state.char.getArmor().restorePhArmor} |
                            Restore Magical Armor
                            -> {this.state.char.getArmor().restoreMArmor}
                        </Text>
                        <Text>Restore Armor from status
                            -> {this.state.char.getArmor().restoreArmorFromStatus}</Text>
                        <Text>
                            Under construction.
                        </Text>
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
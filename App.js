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

    render() {
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
                    indicator={<PagerTitleIndicator
                        titles={['Attributes', 'Combat' +
                        ' Abilities', 'Civil Abilities', 'Talents']}/>}
                >
                    <View style={{backgroundColor: 'cadetblue'}}>
                        <Text>Attributes</Text>
                        <Text>Available points
                            -> {this.state.char.getPoints().attributes}</Text>
                        {mapObject(this.state.char.attributes, (key, value) => {
                            return <View key={key}>
                                <Button title={"-"}
                                        onPress={() => {
                                            let char = this.state.char;
                                            char.setDown('attributes', key);
                                            this.setState({char: char})
                                        }
                                        }/>
                                <Text>{key} --> {value}</Text>
                                <Button title={"+"}
                                        onPress={() => {
                                            let char = this.state.char;
                                            char.setUp('attributes', key);
                                            this.setState({char: char})
                                        }
                                        }
                                />
                            </View>
                        })}
                    </View>
                    <View style={{backgroundColor: 'cornflowerblue'}}>
                        <Text>Combat Abilities</Text>
                        <Text>Available points
                            -> {this.state.char.getPoints().combat}</Text>
                        {mapObject(this.state.char.combat, (key, value) => {
                            return <View key={key}>
                                <Button title={"-"}
                                        onPress={() => {
                                            let char = this.state.char;
                                            char.setDown('combat', key);
                                            this.setState({char: char})
                                        }
                                        }/>
                                <Text>{key} --> {value}</Text>
                                <Button title={"+"}
                                        onPress={() => {
                                            let char = this.state.char;
                                            char.setUp('combat', key);
                                            this.setState({char: char})
                                        }
                                        }
                                />
                            </View>
                        })}
                    </View>
                    <View style={{backgroundColor: 'cornflowerblue'}}>
                        <Text>Civil Abilities</Text>
                        <Text>Available points
                            -> {this.state.char.getPoints().civil}</Text>
                        {mapObject(this.state.char.civil, (key, value) => {
                            return <View key={key}>
                                <Button title={"-"}
                                        onPress={() => {
                                            let char = this.state.char;
                                            char.setDown('civil', key);
                                            this.setState({char: char})
                                        }
                                        }/>
                                <Text>{key} --> {value}</Text>
                                <Button title={"+"}
                                        onPress={() => {
                                            let char = this.state.char;
                                            char.setUp('civil', key);
                                            this.setState({char: char})
                                        }
                                        }
                                />
                            </View>
                        })}
                    </View>
                    <View style={{backgroundColor: 'red'}}>
                        <Text>Talents</Text>
                        <Text>Available points
                            -> {this.state.char.getPoints().talents}</Text>
                        {mapObject(this.state.char.talents, (key, value) => {
                            return <View key={key}><Text>{key}
                                --> {(value) ? 1 : 0}</Text>
                                <Button title={"?"}
                                        onPress={() => {
                                            let char = this.state.char;
                                            char.switchTalent(key);
                                            this.setState({char: char})
                                        }
                                        }/>
                            </View>
                        })}
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
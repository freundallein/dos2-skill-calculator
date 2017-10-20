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
import getName from './text_namer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {char: character};
    }

    renderPlan(item, plan) {
        return <View key={item.key} style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5
        }}>
            <View style={{flex: .6}}>
                <Text style={styles.text}>{getName(item.key)}</Text>
            </View>
            <View style={{flex: .1}}>
                <Button title={"-"}
                        color={"grey"}
                        onPress={() => {
                            let char = this.state.char;
                            char.setDown(plan, item.key);
                            this.setState({char: char})
                        }
                        }
                />
            </View>
            <View style={{flex: .1}}>
                <Text style={styles.text}>{item.value}</Text>
            </View>
            <View style={{flex: .1}}>
                <Button title={"+"}
                        color={"grey"}
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
                        <Text style={styles.header}>Race</Text>
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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .5}}>
                        <Text
                            style={styles.header}>{this.state.char.gender ? 'Male' : 'Female'}</Text>
                    </View>
                    <View style={{flex: .4}}>
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
                                color={"grey"}
                                onPress={() => {
                                    let char = this.state.char;
                                    char.levelDown();
                                    this.setState({char: char})
                                }
                                }/>
                    </View>
                    <View style={{flex: .4}}>
                        <Text style={styles.header}>
                            Level {this.state.char.level}
                        </Text>
                    </View>
                    <View style={{flex: .3}}>
                        <Button title={"+"}
                                color={"grey"}
                                onPress={() => {
                                    let char = this.state.char;
                                    char.levelUp();
                                    this.setState({char: char})
                                }
                                }
                        />
                    </View>
                </View>
                <IndicatorViewPager
                    style={{flex: 1}}
                    indicator={
                        <PagerTitleIndicator
                            titles={
                                ['Attributes',
                                    'Combat',
                                    'Civil',
                                    'Talents',
                                    'Summary']
                            }
                        />}>
                    <View style={styles.page}>
                        <Text style={styles.points}>Points
                            left: {this.state.char.getPoints().attributes}</Text>
                        <FlatList
                            data={attributes}
                            renderItem={({item}) => this.renderPlan(item, 'attributes')}
                        />
                    </View>
                    <View style={styles.page}>
                        <Text style={styles.points}>Points
                            left: {this.state.char.getPoints().combat}</Text>
                        <FlatList
                            data={combat}
                            renderItem={({item}) => this.renderPlan(item, 'combat')}
                        />
                    </View>
                    <View style={styles.page}>
                        <Text style={styles.points}>Points
                            left: {this.state.char.getPoints().civil}</Text>
                        <FlatList
                            data={civil}
                            renderItem={({item}) => this.renderPlan(item, 'civil')}
                        />
                    </View>
                    <View style={styles.page}>
                        <Text style={styles.points}>Points
                            left: {this.state.char.getPoints().talents}</Text>
                        <FlatList
                            data={talents}
                            renderItem={({item}) => {
                                return <View key={item.key} style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 5
                                }}>
                                    <View style={{flex: .7}}>
                                        <Text style={styles.text}>
                                            {getName(item.key)}
                                        </Text>
                                    </View>
                                    <View style={{flex: .2}}>
                                        <Button
                                            title={(item.value) ? 'Refuse' : 'Take'}
                                            color={"grey"}
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
                    <View style={styles.page}>
                        <Text>Health {this.state.char.getHealth()}</Text>
                        <Text>Armor</Text>
                        <Text>
                            Physical Armor {this.state.char.getArmor().phArmor}
                            % Restore Physical
                            Armor {this.state.char.getArmor().restorePhArmor} %
                        </Text>
                        <Text>
                            Magical Armor {this.state.char.getArmor().mArmor}
                            % Restore Magical
                            Armor {this.state.char.getArmor().restoreMArmor} %
                        </Text>
                        <Text>
                            Restore Armor from
                            status {this.state.char.getArmor().restoreArmorFromStatus}
                            %
                        </Text>
                        <Text>Damage</Text>
                        <Text>
                            Strength based
                            Damage {this.state.char.getDamage().strDmg} %
                            Physical
                            Damage {this.state.char.getDamage().physDmg} %
                        </Text>
                        <Text>Single-handed
                            Damage {this.state.char.getDamage().SHDmg} %
                            Two-handed
                            Damage {this.state.char.getDamage().THDmg} %
                        </Text>
                        <Text>
                            Finesse based
                            Damage {this.state.char.getDamage().finDmg} %
                            Dual wielding
                            Damage {this.state.char.getDamage().DWDmg} %
                        </Text>
                        <Text>Ranged
                            Damage {this.state.char.getDamage().SHDmg} %
                            Sneaking
                            Damage {this.state.char.getDamage().THDmg} %
                        </Text>
                        <Text>
                            Intelligence based
                            Damage {this.state.char.getDamage().intDmg} %
                        </Text>
                        <Text>Poison
                            Damage {this.state.char.getDamage().PoisonDmg} %
                            Fire
                            Damage {this.state.char.getDamage().FireDmg} %
                        </Text>
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
    text: {
        textAlign: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 16
    },
    page: {
        backgroundColor: 'white'
    },
    button: {
        padding: "5px"
    },
    points: {
        margin: 5,
        textAlign: 'center',
        fontSize: 18
    }
});
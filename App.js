import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Picker,
    Switch,
    FlatList,
    Modal
} from 'react-native';
import {
    IndicatorViewPager,
    PagerTitleIndicator
} from 'rn-viewpager';

import character, {mapObject} from './logic';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            char: character,
            modal: false,
            description: ''
        };
    }

    showDescription(visible, description) {
        this.setState({
            modal: visible,
            description: description
        });
    }

    renderPlan(item, plan) {
        return <View key={item.key} style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5
        }}>
            <View style={{flex: .6}}>
                <Text style={styles.text}
                      onPress={() => {
                          this.showDescription(!this.state.modal, item.description)
                      }}>
                    {item.name}
                </Text>
            </View>
            <View style={{flex: .1}}>
                <Button title={"-"}
                        color={"#3b1b1e"}
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
                        color={"#3b1b1e"}
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

    renderSummary(item) {
        return <View key={item.key} style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5
        }}>
            <View style={{flex: .5}}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={{flex: .5}}>
                <Text style={styles.text}>{item.value}</Text>
            </View>
        </View>
    }

    render() {
        const attributes = mapObject(this.state.char.attributes);
        const combat = mapObject(this.state.char.combat);
        const civil = mapObject(this.state.char.civil);
        const talents = mapObject(this.state.char.talents);
        const summary = mapObject(this.state.char.getSummary());
        return (
            <View
                style={{flex: 1, paddingTop: 20, backgroundColor: '#aea69b'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .5}}>
                        <Text style={styles.header}>Race</Text>
                    </View>
                    <View style={{flex: .5}}>
                        <Picker
                            selectedValue={this.state.char.race}
                            onValueChange={(value) => {
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
                                color={"#3b1b1e"}
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
                                color={"#3b1b1e"}
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
                                            {item.name}
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
                        <FlatList
                            data={summary}
                            renderItem={({item}) => this.renderSummary(item)}
                        />
                    </View>
                </IndicatorViewPager>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modal}
                    onRequestClose={() => {
                        this.showDescription(!this.state.modal)
                    }}
                >
                    <View style={{
                        position: 'absolute',
                        bottom: -300,
                        left: 0,
                        right: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            width: 300,
                            height: 500,
                            opacity: 0.8
                        }}>
                            <Text style={styles.modalContent}
                                  onPress={() => {
                                      this.showDescription(!this.state.modal)
                                  }}>
                                {this.state.description}
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: '#532025'
    },
    header: {
        textAlign: 'center',
        fontSize: 16,
        color: '#532025'
    },
    page: {
        backgroundColor: '#aea69b'
    },
    button: {
        padding: "5px"
    },
    points: {
        margin: 5,
        textAlign: 'center',
        fontSize: 18,
        color: '#532025'
    },
    modalContent: {
        backgroundColor: 'gray',
        padding: 10,
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
});
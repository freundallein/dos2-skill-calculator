import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Modal
} from 'react-native';
import {
    IndicatorViewPager,
    PagerTitleIndicator
} from 'rn-viewpager';

import character, {mapObject} from './logic';
import Level from './components/Level';
import RacePicker from './components/RacePicker';
import Tooltip from "./components/Tooltip";

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
                        color={buttonColor}
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
                        color={buttonColor}
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
                <RacePicker race={this.state.char.race}
                            changeRace={(value) => {
                                let char = this.state.char;
                                char.setRace(value);
                                this.setState({char: char})
                            }}
                            styles={styles}
                />
                <Level level={this.state.char.level}
                       increase={() => {
                           let char = this.state.char;
                           char.levelUp();
                           this.setState({char: char})
                       }}
                       decrease={() => {
                           let char = this.state.char;
                           char.levelDown();
                           this.setState({char: char})
                       }}
                       buttonColor={buttonColor}
                       styles={styles}
                />
                <IndicatorViewPager
                    style={{flex: 1}}
                    indicator={
                        <PagerTitleIndicator
                            itemStyle={styles.itemStyle}
                            itemTextStyle={styles.itemTextStyle}
                            selectedItemStyle={styles.selectedItemStyle}
                            selectedItemTextStyle={styles.selectedItemTextStyle}
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
                                        <Text style={styles.text}
                                              onPress={() => {
                                                  this.showDescription(!this.state.modal, item.description)
                                              }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View style={{flex: .2}}>
                                        <Button
                                            title={(item.value) ? 'Refuse' : 'Take'}
                                            color={buttonColor}
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
                <Tooltip visible={this.state.modal}
                         showDescription={() => {
                             this.showDescription(!this.state.modal)
                         }}
                         description={this.state.description}
                         styles={styles}
                />
            </View>
        );
    }
}

const buttonColor = "#3b1b1e";
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
    itemStyle: {
        backgroundColor: '#532025'
    },
    itemTextStyle: {
        color: '#aea69b'
    },
    selectedItemStyle: {
        backgroundColor: '#aea69b'
    },
    selectedItemTextStyle: {
        color: '#532025'
    }
});
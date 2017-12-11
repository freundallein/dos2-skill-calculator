import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    SectionList
} from 'react-native';
import {
    IndicatorViewPager,
    PagerDotIndicator
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
                        <PagerDotIndicator
                            pageCount={5}/>
                    }>
                    <View style={styles.page}>
                        <Text style={styles.points}>Points
                            left: {this.state.char.getPoints().attributes}</Text>
                        <FlatList
                            removeClippedSubviews={false}
                            data={attributes}
                            renderItem={({item}) => this.renderPlan(item, 'attributes')}
                        />
                    </View>
                    <View style={styles.page}>
                        <Text style={styles.points}>Points
                            left: {this.state.char.getPoints().combat}</Text>
                        <SectionList
                            renderItem={({item}) => this.renderPlan(item, 'combat')}
                            renderSectionHeader={({section}) => <Text
                                style={styles.header}>{section.title}</Text>}
                            sections={[
                                {
                                    data: combat.filter((item) => item.skillGroup === 'weapons'),
                                    title: 'Weapons'
                                },
                                {
                                    data: combat.filter((item) => item.skillGroup === 'defence'),
                                    title: 'Defence'
                                },
                                {
                                    data: combat.filter((item) => item.skillGroup === 'skills'),
                                    title: 'Skills'
                                },
                            ]}
                        />
                    </View>
                    <View style={styles.page}>
                        <Text style={styles.points}>Points
                            left: {this.state.char.getPoints().civil}</Text>
                        <SectionList
                            renderItem={({item}) => this.renderPlan(item, 'civil')}
                            renderSectionHeader={({section}) => <Text
                                style={styles.header}>{section.title}</Text>}
                            sections={[
                                {
                                    data: civil.filter((item) => item.skillGroup === 'personality'),
                                    title: 'Personality'
                                },
                                {
                                    data: civil.filter((item) => item.skillGroup === 'craftsmanship'),
                                    title: 'Craftsmanship'
                                },
                                {
                                    data: civil.filter((item) => item.skillGroup === 'nasty'),
                                    title: 'Nasty deeds'
                                },
                            ]}
                        />
                    </View>
                    <View style={styles.page}>
                        <Text style={styles.points}>Points
                            left: {this.state.char.getPoints().talents}</Text>
                        <FlatList
                            removeClippedSubviews={false}
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
                            removeClippedSubviews={false}
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
        backgroundColor: '#aea69b',
        paddingBottom: 30
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
import React from 'react';
import {
    Text,
    View
} from 'react-native';
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';
import {translateInterface} from '../namespace';

class TopNavigation extends React.Component {
    render() {
        const language = this.props.language;
        const changeLanguage = this.props.changeLanguage;
        const save = this.props.save;
        const load = this.props.load;
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#3b1b1e',
                padding: 20,
                paddingTop: 30
            }}>
                <View style={{
                    flex: 0.4,
                    paddingLeft: 20
                }}>
                    <Menu
                        onSelect={save}>
                        <MenuTrigger>
                            <Text style={{
                                fontSize: 14,
                                color: 'white'
                            }}>
                                {translateInterface('save', language)}
                            </Text>
                        </MenuTrigger>
                        <MenuOptions
                            optionsContainerStyle={{
                                marginLeft: 30,
                                right: null
                            }}
                        >
                            <MenuOption value={'slot1'}>
                                <Text>Slot 1</Text>
                            </MenuOption>
                            <MenuOption value={'slot2'}>
                                <Text>Slot 2</Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>
                <View style={{
                    flex: 0.4,
                    paddingLeft: 20
                }}>
                    <Menu
                        onSelect={load}>
                        <MenuTrigger>
                            <Text style={{
                                fontSize: 14,
                                color: 'white'
                            }}>
                                {translateInterface('load', language)}
                            </Text>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption value={'slot1'}>
                                <Text>Slot 1</Text>
                            </MenuOption>
                            <MenuOption value={'slot2'}>
                                <Text>Slot 2</Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>
                <View style={{
                    flex: 0.2,
                }}>
                    <Menu
                        onSelect={changeLanguage}>
                        <MenuTrigger>
                            <Text style={{
                                fontSize: 14,
                                color: 'white'
                            }}>{language}</Text>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption value={'EN'}>
                                <Text>English</Text>
                            </MenuOption>
                            <MenuOption value={'RU'}>
                                <Text>Русский</Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>
            </View>
        )
    }
}

export default TopNavigation;
import React from 'react';
import {
    Text,
    View
} from 'react-native';
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';

class TopNavigation extends React.Component {
    render() {
        const language = this.props.language;
        const changeLanguage = this.props.changeLanguage;
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
                        onSelect={(value) => console.log(`Saved to ${value}`)}>
                        <MenuTrigger>
                            <Text style={{
                                fontSize: 14,
                                color: 'white'
                            }}>Save</Text>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption value={'slot 1'}>
                                <Text>Slot 1</Text>
                            </MenuOption>
                            <MenuOption value={'slot 2'}>
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
                        onSelect={(value) => console.log(`Load from ${value}`)}>
                        <MenuTrigger>
                            <Text style={{
                                fontSize: 14,
                                color: 'white'
                            }}>Load</Text>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption value={'slot 1'}>
                                <Text>Slot 1</Text>
                            </MenuOption>
                            <MenuOption value={'slot 2'}>
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
                            }}>Lang</Text>
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
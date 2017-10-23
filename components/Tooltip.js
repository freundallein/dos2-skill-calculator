import React from 'react';
import {
    Text,
    View,
    Modal
} from 'react-native';


class Tooltip extends React.Component {
    render() {
        const visible = this.props.visible;
        const showDescription = this.props.showDescription;
        const description = this.props.description;
        const styles = this.props.styles;

        return <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={showDescription}
        >
            <View style={{
                position: 'absolute',
                bottom: -200,
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
                          onPress={showDescription}>
                        {description}
                    </Text>
                </View>
            </View>
        </Modal>
    }
}

export default Tooltip;
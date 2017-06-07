import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import Swipeout from 'react-native-swipeout'

export default class ListScreen extends Component {


    state = {
        selected: (new Map(): Map<string, boolean>),
        rowID: null
    };
    _keyExtractor = (item, index) => index;

    render() {
        return <FlatList
            data={this.props.todos}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            ListFooterComponent={this._ListFooterComponent}
            renderItem={this._renderItem}
        />
    }

    _renderItem = ({item, index}) => (
        (
            <Swipeout
                close={(this.state.rowID !== index)}
                right={[
                    {
                        text: '删除',
                        backgroundColor: '#4fba8a',
                        color: '#17807a',
                        underlayColor: "#006fff",
                    }
                ]}
                rowID={index}
                autoClose={true}
                onOpen={(sectionID, rowID) => {
                    this.setState({
                        rowID
                    })
                }}
                onClose={() =>this.props.actions.deleteTodo(index)}
            >
                <View style={styles.container}>
                    <Text>{item}</Text>
                </View>
            </Swipeout>
        )
    );

    _ListFooterComponent = () => {
        return <Button title="添加toDo"
                       onPress={() => this.props.navigation.navigate("AddScreen")}/>
    };

    _deleteTodo(param){
        this.props.actions.deleteTodo(param)
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        marginBottom: 1
    }
});



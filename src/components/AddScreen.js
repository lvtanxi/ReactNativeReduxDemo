import React, {Component} from 'react'
import {
    Button,
    TextInput,
    View
} from 'react-native';
export default class AddScreen extends Component {
    state={
        text:""
    };
    render() {
        return (
            <View>
                <TextInput placeholder="请输入todo信息" onChangeText={(text) => this.setState({text})} value={this.state.text}/>
                <Button onPress={this.addTodo.bind(this)} title="添加todo"/>
            </View>
        )
    }

    addTodo() {
        this.props.actions.addTodo(this.state.text);
        this.props.navigation.goBack()
    }
}
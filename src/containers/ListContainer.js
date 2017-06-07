import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './../actions'
import ListScreen from '../components/ListScreen'


class ListContainer extends Component {
    render() {
        let boundActions = bindActionCreators(Actions, this.props.dispatch);
        return (
            <ListScreen
                actions={boundActions}
                navigation={this.props.navigation}
                todos={this.props.todos}/>
        )
    }
}
ListContainer.propTypes = {
    todos: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    todos: state.counter.todos
});

export default connect(mapStateToProps)(ListContainer)
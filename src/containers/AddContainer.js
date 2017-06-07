import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './../actions'
import AddScreen from '../components/AddScreen'


class AddContainer extends Component {
    render() {
        let boundActions = bindActionCreators(Actions, this.props.dispatch);
        return (
            <AddScreen
                actions={boundActions}
                navigation={this.props.navigation}/>
        )
    }
}
AddContainer.propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(AddContainer)
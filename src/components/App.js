import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {addNavigationHelpers, StackNavigator} from 'react-navigation'
import AddContainer from '../containers/AddContainer'
import ListContainer from '../containers/ListContainer'
export const AppNavigator = StackNavigator({
    ListScreen: { screen: ListContainer },
    AddScreen: { screen: AddContainer }
});

const App = ({ dispatch , nav }) => (
    <AppNavigator
        navigation={addNavigationHelpers({dispatch: dispatch, state: nav})}/>
);

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(App)
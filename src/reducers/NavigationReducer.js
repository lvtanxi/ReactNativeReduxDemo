//导航的Reducer
import {NavigationActions} from 'react-navigation'
import {AppNavigator} from './../components/App'

export default function navigationReducer(state, action) {
    let nextState;
    switch (action.type) {
        case "Back":
            nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
            break;
        case "ListScreen":
            nextState = getNextState('ListScreen', state);
            break;
        case "AddScreen":
            nextState =  getNextState('AddScreen', state);
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break
    }
    return nextState || state;
}

function getNextState(rName, state) {
    return AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: rName}), state);
}

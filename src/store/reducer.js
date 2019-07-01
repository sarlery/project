import { combineReducers } from 'redux-immutable';          // 把 state 变成 immutable 对象
import { reducer as headerReducer } from '../common/Header/store';
import { reducer as homeReducer } from '../pages/Home/store';
import { reducer as detailReducer } from '../pages/Detail/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
});

export default reducer;
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index'
//redux中间件
import thunkMiddleware from 'redux-thunk';
//可以把很多个中间件放到数组里面
const middlewares = [thunkMiddleware];

//用增强器合并中间件和redux查看工具
const win = window;
const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    // 触发 redux-devtools
    win.devToolsExtension ? win.devToolsExtension() : f => f
);

export default function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        storeEnhancers
    );
    return store
}
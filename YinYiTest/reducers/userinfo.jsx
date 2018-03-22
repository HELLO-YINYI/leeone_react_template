import * as actionTypes from '../contains/userinfo'

let initialState = {};
export default function userinfo(state=initialState, action) {
    switch(action.type) {
        //登录
        case actionTypes.USERLOGIN:
            return action.data;

        //修改名字
        case actionTypes.UPDATENAME:
            return Object.assign({},state,{name: action.data});
        //修改职业
        case actionTypes.UPDATEJOB:
            return Object.assign({},state,{job: action.data});
        //默认
        default:
            return state;
    }
}
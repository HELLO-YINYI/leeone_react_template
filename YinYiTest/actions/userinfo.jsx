import * as actionTypes from '../contains/userinfo'

export function userLogin(data) {
    return {
        type: actionTypes.USERLOGIN,
        data
    }
}
export function updateName(data) {
    return {
        type: actionTypes.UPDATENAME,
        data
    }
}
export function updateJob(data) {
    return {
        type: actionTypes.UPDATEJOB,
        data
    }
}
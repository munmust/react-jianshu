import {fromJS} from 'immutable';
import * as actionType from './actionType';
const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
});
export default (state=defaultState,action)=>{
    switch (action.type){
        case actionType.CHANGE_HOME_DATA:
           return state.merge({
                topicList: fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            });
        case actionType.ADD_HOME_LIST:
            return state.set('articleList',state.get('articleList').concat(action.list));

        case actionType.TOGGLE_SCROLL_TOP:
            return state.set('showScroll','action.show');



            default:
            return state;
    }
}
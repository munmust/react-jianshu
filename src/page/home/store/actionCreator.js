import axios from "axios/index";
import * as actionType from './actionType';
import {fromJS} from 'immutable';
const changeHomeData=(result)=>({
    type:actionType.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
});
const addHomeList=(list)=>({
    type:actionType.ADD_HOME_LIST,
    list:fromJS(list)
});



export const getHomeInfo=()=>{
   return (dispatch) =>{
    axios.get('/api/home.json').then((res)=>{
       const result=res.data.data;
        dispatch(changeHomeData(result));
    })
}
};
export const getMoreList=()=>{
  return (dispatch)=>{
      axios.get('/api/homeList.json').then((res)=>{
          const result=res.data.data;
          console.log(result);
          dispatch(addHomeList(result));

      })
  }
};
export const toggleTopShow=(show)=>({
    type:actionType.TOGGLE_SCROLL_TOP,
    show
});
import axios from 'axios';
import * as actionType from './actionType';
const changeLogin=()=>({
        type:actionType.CHANGE_LOGIN,
    value:true
});
export const login=(account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+ account + '&password' + password).then(
            (res)=>{
                    const result=res.data.data;
                    if (result){
                        dispatch(changeLogin())
                    }
                    else{

                    }
            }
        )
    }
};
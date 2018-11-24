import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBox,Input,Button} from "./style";
import * as actionCreator from './store/actionCreator';

class Login extends PureComponent{
    render(){
        return(
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' innerRef={(input)=>{this.account=input}} />
                    <Input placeholder='密码' innerRef={(input)=>{this.password=input}}/>
                    <Button onClick={()=>this.props.login(this.account,this.password)}>登陆</Button>
                </LoginBox>

               </LoginWrapper>
        )
    }
}
const mapDispatch=(dispatch)=>({
        login(account,password){
                dispatch(actionCreator.login(account,password))
        }
});



export default connect(null,mapDispatch)(Login);
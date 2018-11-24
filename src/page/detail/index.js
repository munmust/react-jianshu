import React,{Component} from 'react';
import {DetailWrapper,Header,Content} from "./style";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actionCreator from './store/actionCreator';
class Detail extends Component{
    render(){
        return(
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}/>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState=(state)=>({
   title:state.getIn(['detail','title']),
   content:state.getIn(['detail','content'])
});
const mapDispatch=(dispatch)=>({
        getDetail(id){
            dispatch(actionCreator.getDetail(id));
        }
});
export default connect(mapState,mapDispatch)(withRouter(Detail));
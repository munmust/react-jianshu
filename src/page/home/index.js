import React,{PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import Topic from './component/Toopic';
import List from './component/List';
import Writer from './component/Writer';
import Recommend from './component/Recommend';
import {connect} from 'react-redux';
import {actionCreator} from './store';
class Home extends PureComponent{
    handleScrollTop(){
        window.scroll(0,0);
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft><img alt='' className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4434/953b3107dd6b2289a4fbe47169ec653fa20d7a0c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                   <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
    }
}

const mapState=(state)=>({
    showScroll:state.getIn(["home","showScroll"])
});
const mapDispatch=(dispatch)=>({
      changeHomeData(){
            dispatch(actionCreator.getHomeInfo());
      }

});



export default connect(mapState,mapDispatch)(Home);
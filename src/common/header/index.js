import React,{Component} from 'react';
import { connect } from 'react-redux';
import {actionCreator} from './store'
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    Navitem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button,
    SearchWrapper
} from "./style";


class Header extends Component{
   getListArea=()=>{
       const {totalPage,focused,list,page,changePage,handleMouseEnter,handleMouseLeave,moseIn}=this.props;
       const newList=list.toJS();
       const pageList=[];
       if (newList.length){
       for (let i=(page-1)*10;i<page*10;i++){
           pageList.push(
               <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
           )
       }}
       if (focused||moseIn){
            return(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>changePage(page,totalPage)}>
                            换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                        </SearchInfoList>
                </SearchInfo>
            )
        }
        else {
            return null;
        }
    };
    render(){
        const {focused,handleInputFocus,handleInputBlur,login}=this.props;
        return(
            <HeaderWrapper>
                <Link  to='/'>
                <Logo/>
                </Link>
                <Nav>
                    <Navitem className = 'left active'>首页</Navitem>
                    < Navitem className = 'left' >下载App</Navitem>

                    {
                        login?<Navitem className = 'right' > 退出 </Navitem>:
                            <Link to='/login' comp><Navitem className = 'right' > 登陆 </Navitem></Link>
                    }


                    <Navitem className = 'right' >
                        <i className="iconfont">&#xe636;</i>
                    </Navitem>
                    <SearchWrapper>
                        <NavSearch
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            className={focused ? 'focused':''}
                        />
                        <i className={focused ? 'focused iconfont':'iconfont'}>
                            &#xe62d;
                        </i>
                        {this.getListArea(focused)}
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Button className = 'writing' >
                        <i className="iconfont">&#xe622;</i>
                        写文章
                    </Button>
                    <Button className = 'reg' > 注册 </Button>
                </Addition >
            </HeaderWrapper>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        moseIn:state.get('header').get('mouseIn'),
        totalPage:state.get('header').get('totalPage'),
        login:state.get('login').get('login')
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus(){
            dispatch(actionCreator.getList());
           dispatch(actionCreator.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreator.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave())
        },
        changePage(page,totalPage){
            if (page<totalPage){
                dispatch(actionCreator.changePage(page+1))
            }else {
                dispatch(actionCreator.changePage(1))
            }

        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
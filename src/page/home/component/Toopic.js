import React,{ PureComponent} from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';

class Topic extends  PureComponent{
    render(){
        return(
            <TopicWrapper>
                {
                    this.props.list.map((item)=>{
                        return <TopicItem key={item.get('id')}>
                            <img alt='' className='topic-pic' src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"/>
                            {item.get('title')}
                        </TopicItem>
                    })
                }

            </TopicWrapper>
        )
    }
}
const mapStateToProps=(state)=>({
   list: state.get('home').get('topicList')
});
export default connect(mapStateToProps,null)(Topic);
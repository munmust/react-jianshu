import styled from 'styled-components';

export const HomeWrapper=styled.div`
    width:960px;
    margin 0 auto;
   overflow:hidden;
    `;
export const HomeLeft=styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
    width:625px;
    height:270px;
    }
    `;
export const HomeRight=styled.div`
    width:280px;
    float:right;
    `;
//Topic
export const TopicWrapper=styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
    `;
export const TopicItem=styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    padding-right:10px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-left:18px;
    margin-bottom:18px;
    .topic-pic{
    display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
        display:block;
        
    }
    `;
//List
export const ListItem=styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        width:125px;
        height:100px;
        display:block;
        float:right;
    }
    `;
export const ListInfo=styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
        }
      .desc{
        color:#999;
        line-height: 18px;
        font-size:13pz;    
        }
    `;
//Recommend
export const RecommendWrapper=styled.div`
    width:280px;
    margin:30px 0;
    
    `;
export const RecommendItem=styled.div`
    width:280px;
    height:50px;
    background:blue;
    margin 10px 0;
    background-size:contain;
    `;
//Writer
export const WriterWrapper=styled.div`
    width：100%;
    border:1px solid red;
    border-radius:3px;
    height:300px;
    line-height:300px;
    text-align:center
    `;
export const LoadMore=styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    border-radius:20px;
    background:#a5a5a5;
    color:#fff;
    margin:20px auto;
    cursor:pointer;
    `;
export const BackTop=styled.div`
     position:fixed;
     right:3px;
     bottom:30px;
     font-size:14px;
     width:60px;
     height:60px;
     text-align:center;
     line-height:60px;
     border:1px solid #dcdcdc;
     cursor:pointer;
     
    
    `;
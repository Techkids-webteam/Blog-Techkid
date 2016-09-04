import React from "react";
import ButtonFacebook from "../../Home/ButtonFacebook/ButtonFacebook";
import paginationCatogory from "../paginationCatogory/paginationCatogory";

import { IndexLink, Link, withRouter } from "react-router";

export default class RecentPosts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page      : 1,
      TotalPage : 1
    }
    this.next     = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  HandPageClick(number){
    $.ajax({
      type   : 'GET',
      url    : this.props.post + number,
      cache  : false,
      success: function(res){
        console.log(res);
        this.setState({
          post: res,
          page: number
        })
      }.bind(this),
      error: function(err){
        console.log(err)
      }.bind(this)
    });
  }
  next(){
    let number =(this.state.page) + 1
    this.HandPageClick(number);
  }

  previous(){
    let number = (this.state.page) - 1
    if( number < 1 ) number = 1
    this.HandPageClick(number);
  }
  render(){
    var date ;
    var shortTime ;
    var shortDate;
    console.log(this.props.post);
    var Posts = this.props.post.map((post) =>{
        date = new Date(post.createdAt);
        shortTime = date.toLocaleTimeString().toLowerCase().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");
        shortDate = (date.getMonth() + 1) + "-" +  date.getDate() + "-" +  date.getFullYear();
        return (
              <ul  className="col-sm-6 RecentPosts_Title_content"  key={post._id}>
                <li className="RecentPosts_Title_content_img">
                    <Link to={`/layoutDetail/${post._id}`}><img src={post.image_url}/></Link>
                    <h3>
                      <Link to={`/layoutDetail/${post._id}`}>
                        {post.title.substring(0,70) + "..."}
                      </Link>
                    </h3>
                    <p>
                      {post.content.substring(0,100)}
                    </p>
                    <ButtonFacebook post={post._id}/>
                    <p className="NewPost_category">{post.category} | {shortDate + " " + shortTime}</p>
                </li>
              </ul>
            )
         })
    return(
      <div className="">
        <div className="row">
          <div className="text-left hidden-xs RecentPosts_Title_img">
            <img src="../../images/RecentPosts.png"/>
          </div>
          <div className="col-sm-10 text-center visible-xs RecentPosts_Title_img_mobile">
            <img src="../../images/RecentPostsMobile.png"/>
          </div>
        </div>
        <div className="row RecentPosts">
           {Posts}
        </div>
        <paginationCatogory
          HandPageClick={this.HandPageClick.bind(this)}
          page={this.state.page}
          next={this.next}
          previous={this.previous}
          />
      </div>
     )
  }
};

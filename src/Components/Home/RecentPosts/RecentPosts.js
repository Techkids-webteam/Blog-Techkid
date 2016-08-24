import React from "react";
import { IndexLink, Link, withRouter } from "react-router";
import Pagination from "../Pagination/Pagination";

export default class RecentPosts extends React.Component{
  constructor(){
    super();
    this.state = {
      blog      : [],
      listPage  : [],
      page      : 1,
      sumPage   : 1
    }
    this.next     = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  getpage () {
    $.ajax({
      type   : 'GET',
      url    : 'http://techkids.vn:9196/api/blog/getPage',
      cache  : false,
      success: function(res){
        this.setState({
          listPage: res,
          sumPage : res.length,
        })
      }.bind(this),
      error  : function(err){
        console.log(err)
      }.bind(this)
    });
  }

  HandPageClick(number){
    $.ajax({
      type   : 'GET',
      url    : 'http://techkids.vn:9196/api/blog/getBlogsByPage/' + number,
      cache  : false,
      success: function(res){
        console.log(res);
        this.setState({
          blog: res,
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


  componentDidMount(){
    $.ajax({
      type: 'GET',
      url: 'http://techkids.vn:9196/api/blog/getBlogsByPage/1',
      cache : false,
      success: function(res){
        this.setState({
          blog: res,
        })
      }.bind(this),
      error: function(err){
        console.log(err)
      }.bind(this)
    });

    this.getpage();
  }

  render(){
    var Posts = this.state.blog.map((post) =>{
        return (
              <div  className="col-sm-5 RecentPosts_Title_content"  key={post._id}>
                <div className="RecentPosts_Title_content_img">
                  <Link to={`/layoutDetail/${post._id}`}><img src={post.image_url}/></Link>
                  <h3>
                      <Link to={`/layoutDetail/${post._id}`}>
                      {post.title.substring(0,60) + "..."}
                    </Link>
                  </h3>
                  <p>
                    {post.content.substring(0,200)}
                  </p>
                </div>
              </div>
            )
         })
    return(
      <div className="">
        <div className="row">
          <div className="col-sm-10 text-left hidden-xs RecentPosts_Title_img">
            <img src="../../images/RecentPosts.png"/>
          </div>
          <div className="col-sm-10 text-center visible-xs RecentPosts_Title_img_mobile">
            <img src="../../images/RecentPostsMobile.png"/>
          </div>
        </div>
        <div className="row RecentPosts">
           {Posts}
        </div>
        <Pagination HandPageClick={this.HandPageClick.bind(this)}
                    page={this.state.page}
                    next={this.next}
                    previous={this.previous}
                    listPage={this.state.listPage} />
      </div>
     )
  }
};

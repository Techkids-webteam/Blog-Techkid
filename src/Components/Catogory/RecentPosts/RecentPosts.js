import React from "react";
import { IndexLink, Link, withRouter } from "react-router";

export default class RecentPosts extends React.Component{
  constructor(){
    super();
  }
  render(){
    var Posts = this.props.post.map((post) =>{
        return (
              <div  className="col-sm-5 RecentPosts_Title_content"  key={post._id}>
                <div className="RecentPosts_Title_content_img">
                  <Link to={`/layoutDetail/${post._id}`}><img src={post.image_url}/></Link>
                  <h3>
                    <Link to={`/layoutDetail/${post._id}`}>
                      {post.title.substring(0,76) + "..."}
                    </Link>
                  </h3>
                  <p>
                    {post.content.substring(0,121)}
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
      </div>
     )
  }
};

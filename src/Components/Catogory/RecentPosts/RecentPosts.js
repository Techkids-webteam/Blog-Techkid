import React from "react";
import ButtonFacebook from "../../Home/ButtonFacebook/ButtonFacebook";
import { IndexLink, Link, withRouter } from "react-router";

export default class RecentPosts extends React.Component{
  constructor(props){
    super(props);
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
              <div  className="col-sm-6 RecentPosts_Title_content"  key={post._id}>
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
                  <ButtonFacebook post={post._id}/>
                  <p className="NewPost_category">{post.category} | {shortDate + " " + shortTime}</p>
                </div>
              </div>
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
      </div>
     )
  }
};

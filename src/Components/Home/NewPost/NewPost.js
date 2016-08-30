import React from "react";
import ButtonFacebook from "../ButtonFacebook/ButtonFacebook";
import { IndexLink, Link, withRouter } from "react-router";
export default class NewPost extends React.Component{
  constructor(){
    super();
    this.state = ({
      blog:[],
    })
  }

  componentDidMount(){
    $.ajax({
      type: 'GET',
      url: 'http://techkids.vn:9196/api/blog/getTrendingBlog',
      cache : false,
      success: function(res){
        this.setState({
          blog: res.blog
        })
      }.bind(this),
      error: function(err){
        console.log(err)
      }.bind(this)
    })
  }
  componentDidUpdate(){
    $('#slick_slider').slick({
      dots: false,
      infinite: false,
      arrows:false,
      slidesToShow: 3 ,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false
        }
      }]
    })
  }


  render(){
    var date ;
    var shortTime ;
    var shortDate;
    var Posts = this.state.blog.map((post) =>{
      date = new Date(post.createdAt);
      shortTime = date.toLocaleTimeString().toLowerCase().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");
      shortDate = (date.getMonth() + 1) + "-" +  date.getDate() + "-" +  date.getFullYear();

      return (
          <div className="NewPost" key={post._id}>
            <div className="col-sm-12 NewPost_content_title">
                  <Link to={`/layoutDetail/${post._id}`}><img src={post.image_url}/></Link>
                  <h3>
                  <Link to={`/layoutDetail/${post._id}`}>{post.title.substring(0,65)}</Link>
                  </h3>
                  <p>
                    {post.content.substring(0,120)}
                  </p>
                  <ButtonFacebook post={post._id}/>
                  <p className="NewPost_category">{post.category} | {shortDate + " " + shortTime}</p>
            </div>
          </div>
      )
    })
    return (
      <div className="NewPost_Title" >
          <div className="row">
            <div className=" col-sm-12">
              <img className="text-center" src="../../images/titleblock.png"/>
            </div>
          </div>
          <div className="NewPost_content">
            <div className="row" id="slick_slider">
                {Posts}
            </div>

          </div>
      </div>
    )

  }
};
